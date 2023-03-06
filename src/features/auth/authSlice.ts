import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/taskType";




export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checking',
        user: {},
        errorMessage: undefined,
    } as AuthState,

    reducers: {

        onChecking: (state) => {
            state.status = 'checking';
            state.errorMessage = undefined;
            state.user = {};
        },
        onLogin: (state, action) => {    
            state.status = 'authenticated';
            state.errorMessage = undefined;
            state.user = action.payload;
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.errorMessage = payload;
            state.user = {};
        },
        
        cleanErrorMessage: (state) => {
            state.errorMessage = undefined;
            console.log('error borrado');
            
        }
        


    }
});

export const { onChecking, onLogin, onLogout, cleanErrorMessage } = authSlice.actions;
