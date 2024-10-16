import search from "../../../assets/home/search.png";
import {FC} from "react";

interface  MobileMenuProps{
    setOpen:() => void
}

export const MobileMenu:FC<MobileMenuProps> = ({setOpen}) => {
    return (
        <div className='absolute z-30 top-0 left-0 w-full h-full bg-white'>
            <div onClick={setOpen} className='flex justify-end m-5 text-4xl'>x</div>
            <div className='relative m-3'>
                <input className='relative w-full bg-[#F4F4F5] rounded-lg h-9 px-3 text-[#A1A1AA] focus:outline-none'
                       placeholder='Search'/>
                <img className='absolute top-[30%] right-[5%]' src={search} alt='search'/>
            </div>
        </div>
    )
}