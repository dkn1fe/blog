import {useSelector} from "react-redux";
import {RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {ProfileContact} from "@/features/profile/ui/ProfileContact.tsx";
import profile from '@/assets/home/profile.svg'


export const ProfileInfo = () => {

    const userData = useSelector((state: RootState) => state.authSlice.userData)
    const {email, username, phone, avatar} = userData ?? {}


    return (
        <>
            <div className='flex items-center gap-5'>
                <img className='w-40 h-40 mt-2 object-cover rounded-full' src={avatar ? avatar : profile} alt='profile photo'/>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl'>{username}</h3>
                    <p className='text-lg text-[#999999]'>{email}</p>
                </div>
            </div>
            <ProfileContact email={email} phone={phone}/>
        </>
    )
}