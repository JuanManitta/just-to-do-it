import axios from "axios";

console.log(import.meta.env.VITE_API_URL);

const tasksApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

//INTERCEPTORES
tasksApi.interceptors.request.use((config) => {
    
    config.headers = Object.assign(config.headers, {
        'x-token': localStorage.getItem('token'),
    });
    return config;
});


export default tasksApi;