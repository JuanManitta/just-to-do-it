import axios from "axios";


const tasksApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

//TODO: Add interceptors
tasksApi.interceptors.request.use((config) => {
    
    config.headers = Object.assign(config.headers, {
        'x-token': localStorage.getItem('token'),
    });
    return config;
});


export default tasksApi;