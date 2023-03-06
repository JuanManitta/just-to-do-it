import axios from "axios";
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const tasksApi = axios.create({
    baseURL: VITE_API_URL,
});

//TODO: Add interceptors
tasksApi.interceptors.request.use((config) => {
    
    config.headers = Object.assign(config.headers, {
        'x-token': localStorage.getItem('token'),
    });
    return config;
});


export default tasksApi;