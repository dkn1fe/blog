import {instance} from "@/shared/api/auth.ts";

export const ProfileService = {
    async changeName({username}:{username:string}){
        const {data} = await instance.patch('update-profile',{username});
        return data
    },

    async changeEmail({email}:{email:string}){
        const {data} = await instance.patch('update-profile',{email});
        return data;
    },

    async changePhone({phone}:{phone:string}){
        const {data} = await instance.patch('update-profile',{phone});
        return data;
    },

    async changeAvatar({avatarUrl}:{avatarUrl:string}){
        const {data} = await  instance.patch('update-profile',{avatarUrl});
        return data
    }
}