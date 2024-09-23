import axios from 'axios';
import api from "./interceptors.jsx";

export const login = async (email, password) => {
    try {
        const response = await api.post('/api/token/', {
            email,
            password,
        });

        const { access } = response.data;

        localStorage.setItem('access_token', access);
        return true;
    } catch (error) {
        console.error('Ошибка при логине:', error);
        throw error;
    }
};

export const refreshAccessToken = async () => {
    try {
        const response = await axios.post('/api/token/refresh/');

        const { access } = response.data;

        localStorage.setItem('access_token', access);
    } catch (error) {
        console.error('Ошибка при обновлении токена:', error);
        throw error;
    }
};
