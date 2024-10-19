import {createBrowserRouter} from 'react-router-dom'
import {Root} from '../../../../pages/Root'
import {HomePage} from "../../../../pages/Home";

const routes = [
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)