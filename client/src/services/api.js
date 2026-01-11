import axios from 'axios'

const API = axios.create({
    // baseURL: "http://localhost:5000/api",
    // baseURL: `${import.meta.env.VITE_API_URL}/api`,
    baseURL: `https://fullstack-client-admin-app.onrender.com/api`,
    withCredentials: true
});

export default API;