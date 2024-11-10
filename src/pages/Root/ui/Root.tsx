import {Outlet} from "react-router-dom";
import {Header} from "../../../widgets/header"
import {Footer} from "../../../widgets/footer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../app/providers/StoreProvider/config/store.ts";
import {useEffect} from "react";
import {getProfile} from "../../../app/providers/StoreProvider/config/AuthSlice.ts";
import {UseMessage} from "../../../shared/hooks/UseMessage.tsx";
import {notificationResponse} from "../../../shared/utils/authList.ts";

export const Root = () => {
    const token = localStorage.getItem('token')
    const message = useSelector((state:RootState) => state.authSlice.notificationMessage)
    const dispatch = useDispatch<AppDispatch>()

    const status = notificationResponse[message]

    const notification = UseMessage({type:'Login',message,status})


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
                {notification}
            </main>
            <Footer/>
        </div>
    )
}