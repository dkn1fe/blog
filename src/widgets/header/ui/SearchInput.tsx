import search from '../../../assets/home/search.png'
import {DarkMode} from "./DarkMode.tsx";
import {useState} from "react";
import {MobileMenu} from "./MobileMenu.tsx";

export const SearchInput = () => {
    const [isOpenSearchInput,setIsOpenSearchInput] = useState(false)

    const handleOpenSearchInput = () => {
        setIsOpenSearchInput(!isOpenSearchInput)
    }

    return(
        <div className='flex items-center gap-5'>
            <div className='relative -ml-16 hidden min-[500px]:block'>
                <input className='relative w-full bg-[#F4F4F5] rounded-lg h-9 px-3 text-[#A1A1AA] focus:outline-none'
                       placeholder='Search'/>
                <img className='absolute top-[30%] right-[5%]' src={search} alt='search'/>
            </div>
            <div className='w-[30px] p-1  min-[500px]:hidden'>
                <img onClick={handleOpenSearchInput} className='w-[20px]' alt = 'search' src = {search}/>
                {isOpenSearchInput && <MobileMenu setOpen = {handleOpenSearchInput}/>}
            </div>
            <div className='w-[66px]'>
                <DarkMode/>
            </div>
        </div>
    )
}