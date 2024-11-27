import {Outlet} from "react-router-dom";
import {Header} from "@/widgets/header"
import {Footer} from "@/widgets/footer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {useEffect} from "react";
import {getProfile} from "@/app/providers/StoreProvider/config/AuthSlice.ts";
import {UseMessage} from "@/shared/hooks/UseMessage.tsx";
import {notificationResponse} from "@/shared/utils/authList.ts";
import {setIsAuthToLocalStorage} from "@/shared/helpers/localStorage.helper.ts";

export const Root = () => {
    const token = localStorage.getItem('token')

    const dispatch = useDispatch<AppDispatch>()
    const {notificationMessage, isAuth} = useSelector((state: RootState) => state.authSlice)

    const status = notificationResponse[notificationMessage]
    const notification = UseMessage({type: 'Login', message:notificationMessage, status})


    useEffect(() => {
        if (token) {
            dispatch(getProfile())
        }
    }, []);

    useEffect(() => {
        if(isAuth) setIsAuthToLocalStorage('isAuth',isAuth.toString())
    }, [isAuth]);

    return (
        <div className='container'>
            <header>
                <Header/>
            </header>
            <main className='flex flex-col justify-between'>
                <Outlet/>
                {notification}
            </main>
            <footer>
              <Footer/>
            </footer>
        </div>
    )
}