import light from '../../../assets/home/light.png'
import {useState} from "react";

export const DarkMode = () => {
    const [darkMode,setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-900 flex items-center transition-all ease-in-out">
                <div className="flex flex-row justify-between toggle">
                    <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input onClick={toggleDarkMode} type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden"/>
                            <div className={`block ${darkMode ? 'bg-[#4B6BFB]' : 'bg-[#E8E8EA]'} border-gray-900 w-12 h-7 rounded-full`}></div>
                            <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-5 h-5 rounded-full transition">
                                <img className='absolute top-0 left-0 bg-white rounded-lg w-[20px] object-cover' src = {light} alt = 'modes'/>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}
