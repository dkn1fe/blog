import { Settings, SquarePlus, User } from "lucide-react";
import { Button } from '@/components/ui/button.tsx';
import { Link } from "react-router-dom";
import {AppDispatch} from "@/app/providers/StoreProvider/config/store.ts";
import {useDispatch} from "react-redux";
import {clearMessage} from "@/app/providers/StoreProvider/config/ProfileSlice.ts";

export const ProfileOption = () => {
    const dispatch = useDispatch<AppDispatch>()

    const optionLinks = [
        { id: 1, title: 'Profile', link: '/profile', icon: <User color='gray' size={24} /> },
        { id: 2, title: 'Settings', link: '/profile/settings', icon: <Settings color='gray' size={24} /> },
        { id: 3, title: 'Posts', link: '/profile/posts', icon: <SquarePlus color='gray' size={24} /> },
    ];

    return (
        <div className='flex gap-10'>
            <div className='flex flex-col gap-10 pt-10'>
                {optionLinks.map(item => (
                    <div key={item.id} className='flex items-center gap-3'>
                        {item.icon}
                        <Link onClick={() => dispatch(clearMessage())} to={item.link}>
                            {item.title}
                        </Link>
                    </div>
                ))}
                <Button variant='default' className='w-[200px]'>
                    Create Post
                </Button>
            </div>
            <div className='h-[calc(100vh-10vh)] border-l border-gray-300 w-[1px] ml-5'></div>
        </div>
    );
}
