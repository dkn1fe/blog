import React, {FC, useEffect, useState} from 'react';
import {NotificationMessage} from "../../features/auth/ui/NotificationMessage.tsx";
import {useNavigate} from "react-router-dom";

interface UseMessageProps {
    type: 'Login' | 'Registration',
    message: string,
    status:string,
    isShow?:boolean
}

export const UseMessage: FC<UseMessageProps> = ({type, message,status,isShow}) => {
    const [showNotification, setShowNotification] = useState<React.ReactNode | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (message !== '') {
            setShowNotification(
                <NotificationMessage type={type} message={message} notification={status}/>
            );

            const timer = setTimeout(() => {
                setShowNotification(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status,navigate,type,isShow,message]);


    return showNotification;
};
