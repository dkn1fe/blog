import {FC} from "react";

interface ProfileContactProps{
    email:string | undefined,
    phone:string | undefined,
}

export const ProfileContact:FC<ProfileContactProps> = ({email, phone}) => {
    return (
        <div className='w-2xl bg-gray-300 shadow-xl h-[18%] mt-5 p-1 md:p-4 lg:p-6 rounded-lg'>
            <h3 className='md:text-lg lg:text-xl font-semibold'>Contact Information</h3>
            <div className='flex items-center pt-2'>
                <span className='font-medium text-gray-700 w-24'>Email:</span>
                <span className='text-gray-900'>{email || 'Not provided'}</span>
            </div>
            <div className='flex items-center pt-2'>
                <span className='font-medium text-gray-700 w-24'>Phone:</span>
                <span className='text-gray-900'>{phone || 'Not provided'}</span>
            </div>
        </div>
    )
}
