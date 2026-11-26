
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function registerUser(userData) {
    try {
        const res = await axios.post(
            `${BASE_URL}/user/add`,
            userData
        );

        return res.data;
    } catch (error) {
        console.error("REGISTER API ERROR:", error.response?.data);
        throw error;
    }
}

export async function loginUser(userData) {
    try {
        const res = await axios.post(
            `${BASE_URL}/user/login`,
            userData
        );

        return res.data;
    } catch (error) {
        console.error("LOGIN API ERROR:", error.response?.data);
        throw error;
    }
}

export async function getProfile() {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
            `${BASE_URL}/user/authLogin`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data.user;
    } catch (error) {
        console.error("PROFILE API ERROR:", error.response?.data);
        throw error;
    }
}

export async function logoutUser() {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
            `${BASE_URL}/user/logoutUser`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data;
    } catch (error) {
        console.error("LOGOUT API ERROR:", error.response?.data);
        throw error;
    }
}

export async function authLogin() {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
            `${BASE_URL}/user/authLogin`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data;
    } catch (error) {
        console.error("AUTH ERROR:", error.response?.data);
        throw error;
    }
}
