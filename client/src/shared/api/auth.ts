import {getTokenFromLocalStorage} from "../helpers/localStorage.helper.ts";
import axios from "axios";

export const _baseUrl = 'http://localhost:5000/api'


export const instance = axios.create({
    baseURL: "http://localhost:5000/api/auth/",
});

instance.interceptors.request.use(
    (config) => {
        const token = getTokenFromLocalStorage();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);