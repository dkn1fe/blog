import {Outlet} from "react-router-dom";

import {Header} from "../../../widgets/header"
import {Footer} from "../../../widgets/footer";

export const Root = () => {
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