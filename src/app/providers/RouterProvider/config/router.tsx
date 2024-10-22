import {createBrowserRouter} from 'react-router-dom'
import {Root} from '../../../../pages/Root'
import {HomePage} from "../../../../pages/Home";
import {Registration} from "../../../../features/auth";
import {Login} from "../../../../features/auth/ui/Login.tsx";

const routes = [
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'auth/register',
                element: <Registration/>
            },
            {
                path:'auth/login',
                element: <Login/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)