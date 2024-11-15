import {FC, useState} from 'react';
import {navbarList} from '@/shared/utils/navbarList';
import {Link} from 'react-router-dom'

interface MenuProps {
    isAuth: boolean
}

export const Menu: FC<MenuProps> = ({isAuth}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <div
                className='relative z-30 cursor-pointer space-y-1.5 pt-2'
                onClick={() => setIsOpen(!isOpen)}
            >
        <span
            className={`block h-[3px] w-7 bg-gray-600 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-2 rotate-45 transform' : ''}`}
        ></span>
                <span
                    className={`block h-[3px] w-7 bg-gray-600 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                    className={`block h-[3px] w-7 bg-gray-600 transition-transform duration-500 ease-in-out ${isOpen ? '-translate-y-2 -rotate-45 transform' : ''}`}
                ></span>
            </div>

            <ul
                className={`fixed inset-y-16 left-0 transform bg-gray-900 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20 flex w-full h-full list-none flex-col justify-start p-4 transition-transform duration-500 ease-in-out`}
            >
                {navbarList.map((item, index) => (
                    <li key={index} className='py-2 text-center'>
                        <Link
                            key={item.id}
                            to={item.link}
                            className={`hover:text-blue-400 text-2xl transition-colors text-white duration-300`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
                {!isAuth &&
                    <Link
                        className='hover:text-blue-400 text-center text-2xl transition-colors text-white duration-300'
                        to='/auth/login'>Login
                    </Link>}
            </ul>
        </div>
    );
};
