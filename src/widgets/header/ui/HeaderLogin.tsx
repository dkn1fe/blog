import {Link, useNavigate} from "react-router-dom";
import {FC} from "react";
import profile from '@/assets/home/profile.svg';
import {Smile, User, SquarePlus, Settings, LogOut} from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {AppDispatch} from "@/app/providers/StoreProvider/config/store.ts";
import {useDispatch} from "react-redux";
import {logoutSistem} from "@/app/providers/StoreProvider/config/AuthSlice.ts";

interface HeaderLoginProps {
    isAuth: boolean,
    username:string,
}

export const HeaderLogin: FC<HeaderLoginProps> = ({isAuth,username}) => {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const profileDataList = [
        {id: 1, title: 'Set Status', link: '/profile/status', icon: <Smile size={24}/>},
        {id: 2, title: 'Your profile', link: '/profile', icon: <User size={24}/>},
        {id: 3, title: 'Your posts', link: '/profile/posts', icon: <SquarePlus size={24}/>},
        {id: 4, title: 'Settings', link: '/profile/settings', icon: <Settings size={24}/>},
    ]

    const logout = () => {
        navigate(0)
        dispatch(logoutSistem())
    }

    return (
        <div className='flex justify-center'>
            {!isAuth && (
                <Link to='/auth/login' className='border border-[#696A75]/[0.50] text-[#696A75] rounded-lg px-3 py-2'>
                    Login
                </Link>
            )}
            {isAuth && (
                <Sheet>
                    <SheetTrigger className='focus:outline-none' asChild>
                        <Avatar>
                            <AvatarImage className='cursor-pointer' src={profile} alt="profile"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto rounded-xl shadow-lg">
                        <SheetHeader>
                            <SheetTitle className='flex items-center gap-2'>
                                <Avatar className='flex items-center'>
                                    <AvatarImage className='cursor-pointer' src={profile} alt="profile"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p>{username}</p>
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col gap-4 pt-10'>
                            {profileDataList.map(item => (
                                <div key={item.id}>
                                    <Link to={item.link} className='flex items-center gap-3 cursor-pointer'>
                                        {item.icon}
                                        <p>{item.title}</p>
                                    </Link>
                                    {item.id === 1 && (
                                        <div className='border-t border-gray-300 mt-3'/>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='border-t border-gray-300 my-3'/>
                        <div onClick={logout} className='flex items-center gap-3 pt-2 cursor-pointer'>
                            <LogOut size={24}/>
                            <p>Sign out</p>
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </div>
    )
}
