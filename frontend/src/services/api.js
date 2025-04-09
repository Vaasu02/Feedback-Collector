import axios from 'axios';

const API_URL = 'https://feedback-collector-vxkn.onrender.com/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitFeedback = async (data) => {
    try {
        const response = await api.post('/feedback', data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred' };
    }
};

export const getFeedbacks = async (page = 1, limit = 10) => {
    try {
        const response = await api.get(`/feedback?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred' };
    }
}; 