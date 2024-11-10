import {navbarList} from "@/shared/utils/navbarList.ts";
import {Link} from "react-router-dom";
import {SearchInput} from "./SearchInput.tsx";
import {Menu} from "./Menu.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {clearMessage} from "@/app/providers/StoreProvider/config/AuthSlice.ts";
import {HeaderLogin} from "./HeaderLogin.tsx";
import logo from '@/assets/home/logo.png'


export const Header = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {isAuth,userData} = useSelector((state:RootState) => state.authSlice)
    const {username} = userData ?? ''


    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='flex items-center gap-3'>
                <img src={logo} alt='logo'/>
                <h3 className='hidden lg:flex text-xl'>Meta<span className='font-bold'>Blog</span></h3>
            </div>
            <nav className='hidden md:flex'>
                <ul className='flex flex-items-center gap-10'>
                    {navbarList.map(item => (
                        <Link onClick = {() => dispatch(clearMessage())} key = {item.id} to={item.link}>
                            <li className='text-[#3B3C4A]' key={item.id}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className='order-1 md:hidden'>
                <Menu/>
            </div>
            <div className='w-[166px] ml-16'>
                <SearchInput/>
            </div>
                <HeaderLogin isAuth = {isAuth as boolean} username = {username}/>
        </div>
    )
}
