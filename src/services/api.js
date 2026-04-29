import axios from 'axios';

// Debug: Check environment variables
console.log('=== API DEBUG INFO ===');
console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
console.log('All env vars:', import.meta.env);
console.log('MODE:', import.meta.env.MODE);
console.log('PROD:', import.meta.env.PROD);
console.log('DEV:', import.meta.env.DEV);

// Temporary hardcoded solution - remove this once Vercel environment variable is fixed
const apiBaseUrl = 'https://itew6-backend-master-uq8nc2.free.laravel.cloud/api/v1';
console.log('Final API Base URL:', apiBaseUrl);
console.log('===================');

const api = axios.create({
    baseURL: apiBaseUrl,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('user_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;