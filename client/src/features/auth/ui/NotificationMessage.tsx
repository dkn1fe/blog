import {FC} from "react";
import {CircleX, Check} from "lucide-react";

interface NotificationProps {
    type: string;
    message: string;
    notification: string,
}

export const NotificationMessage: FC<NotificationProps> = ({type, message, notification}) => {
    return (
        <div
            style={{background: notification === 'failed' ? 'red' : 'green'}}
            className="fixed bottom-[20px] right-[20px] w-[250px] text-white py-[15px] p-[10px] rounded-md shadow-xl z-50">
            <h3 className="pb-1">{type}</h3>
            <div className="flex gap-2 items-center">
                {notification === 'failed' ? <CircleX/> : <Check/>}
                <p>{message}</p>
            </div>
        </div>
    );
};