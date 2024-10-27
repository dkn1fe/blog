import {Outlet} from "react-router-dom";
import {Header} from "../../../widgets/header"
import {Footer} from "../../../widgets/footer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../app/providers/StoreProvider/config/store.ts";
import {useEffect} from "react";
import {getProfile} from "../../../app/providers/StoreProvider/config/AuthSlice.ts";

export const Root = () => {

    const dispatch = useDispatch<AppDispatch>()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            dispatch(getProfile())
        }
    }, []);

    return (
        <div className='container'>
            <header>
                <Header/>
            </header>
            <main className='flex flex-col justify-between'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}