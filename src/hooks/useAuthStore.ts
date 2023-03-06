import { useDispatch, useSelector } from 'react-redux';
import tasksApi from '../api/tasksApi';
import { cleanErrorMessage, onChecking, onLogin, onLogout } from '../features/auth/authSlice';
import { RootState } from '../store/store';

interface LoginParams {
    email: string;
    password: string;
}
interface NewUserParams {
    name: string;
    email: string;
    password: string;
}

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector((state: RootState) => state.auth);


    const startLogin = async({ email, password}: LoginParams) => {
        dispatch(onChecking())
        try {
            const {data} = await tasksApi.post('/auth ', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
            dispatch(onLogin({name:data.name, uid:data.uid}));
            
        } catch (error: any) {
            dispatch(onLogout(error.response.data?.msg)); 
            
        }
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout(''));
    };

    const startCreatingUser = async({ email, password, name}: NewUserParams) => {
        dispatch(onChecking())
        try {
            const { data } = await tasksApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
            dispatch(onLogin({name:data.name, uid:data.uid}));
            
        } catch (error: any) {
            console.log(error);
            
            dispatch(onLogout(error.response.data?.msg));
        }
    };

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout(''));

        try {
            const {data} = await tasksApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
            dispatch(onLogin({name:data.name, uid:data.uid}));

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout('token expired'));

        
        }
    };
        

  return {
    //Props
    status,
    user,
    errorMessage,

    //Methods
    startLogin,
    startCreatingUser,
    checkAuthToken,
    startLogout,
    

  }
}
