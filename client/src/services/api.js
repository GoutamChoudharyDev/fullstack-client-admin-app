import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'https://fullstack-client-admin-app.onrender.com'

const API = axios.create({
    // baseURL: "http://localhost:5000/api",
    baseURL: `${BASE_URL}/api`,
    withCredentials: true
});

export default API;