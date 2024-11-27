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

    async changeAvatar({ avatar }: { avatar: File | null }) {
        const formData = new FormData();

        if (avatar) {
            formData.append('avatar', avatar);
        }

        const { data } = await instance.patch('update-profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    }
}