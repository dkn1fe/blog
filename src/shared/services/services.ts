import {instance} from "../api/auth.ts";
import {UserType} from "@/entities/UserType.ts";


export const AuthService = {
    async registration({username, email, password, role = 'author'}: UserType) {
        const {data} = await instance.post("register", {
            username,
            email,
            password,
            role
        });
        return data;
    },

    async login({email, password}: {email:string,password:string}) {
        const {data} = await instance.post("login", {email, password});
        localStorage.setItem("token", data.token);
        return data;
    },

    async getMe() {
        const token = localStorage.getItem("token");
        const {data} = await instance.get(`profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    },

    async getAllUsers() {
        const {data} = await instance.get('users')
        return data
    }
}