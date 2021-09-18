import axios from "axios";
import cookies from 'react-cookies';
export const DOMAIN = 'http://127.0.0.1:8000/';
export const http = axios.create({
    baseURL:DOMAIN,
    timeout:3000,
})
http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        Authorization:`Bearer ${cookies.load('access_token')}`
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})