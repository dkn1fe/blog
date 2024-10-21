import {createBrowserRouter} from 'react-router-dom'
import {Root} from '../../../../pages/Root'
import {HomePage} from "../../../../pages/Home";
import {Registration} from "../../../../features/auth";

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
            }
        ]
    }
]

export const router = createBrowserRouter(routes)