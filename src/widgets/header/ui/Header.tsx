import logo from '../../../assets/home/logo.png'
import {navbarList} from "../../../shared/utils/navbarList.ts";
import {Link} from "react-router-dom";
import {SearchInput} from "./SearchInput.tsx";
import {Menu} from "./Menu.tsx";

export const Header = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='flex items-center gap-3'>
                <img src={logo} alt='logo'/>
                <h3 className='hidden lg:flex text-xl'>Meta<span className='font-bold'>Blog</span></h3>
            </div>
            <nav className='hidden md:flex'>
                <ul className='flex flex-items-center gap-5'>
                    {navbarList.map(item => (
                        <Link to={item.link}>
                            <li className='text-[#3B3C4A]' key={item.id}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className='order-1 md:hidden'>
                <Menu/>
            </div>
            <div className='w-[166px]'>
                <SearchInput/>
            </div>
        </div>
    )
}