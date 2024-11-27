import {createBrowserRouter} from 'react-router-dom'
import {Root} from '@/pages/Root'
import {HomePage} from "@/pages/Home";
import {Registration} from "@/features/auth";
import {Login} from "@/features/auth";
import {ProfilePage, ProfileSettings} from "@/pages/Profile";
import {PrivateRoute} from './privateRoute'

const routes = [
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'auth/register',
                element: <Registration/>
            },
            {
                path: 'auth/login',
                element: <Login/>
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <ProfilePage/>
                    </PrivateRoute>
            },
            {
                path:'/profile/settings',
                element:
                <PrivateRoute>
                    <ProfileSettings/>
                </PrivateRoute>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)