import {loginInputList, notificationResponse} from '@/shared/utils/authList.ts'
import {useFormik, FormikValues} from "formik";
import {GoogleLogin} from "./GoogleLogin.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {clearMessage, login} from "@/app/providers/StoreProvider/config/AuthSlice.ts";
import {Link, useNavigate} from "react-router-dom";
import {UseMessage} from '@/shared/hooks/UseMessage.tsx'
import {useEffect, useState} from 'react';
import logo from "../../../assets/home/logo.png";
import * as Yup from "yup";


export const Login = () => {
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const message = useSelector((state: RootState) => state.authSlice.notificationMessage);
    const status: string | undefined = notificationResponse[message];

    const notification = UseMessage({type: 'Login', message, status, isShow})


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required().email().trim(),
            password: Yup.string().required().trim(),
        }),
        onSubmit: (values: FormikValues) => {
            const {email, password} = values;
            dispatch(login({email, password}))
            setIsShow(!isShow)
        }
    })

    useEffect(() => {
        if (status === 'success') {
            navigate('/')
        }
    }, [status, navigate])

    return (
        <div className="relative pt-16 container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-2xl">
                    <div className="p-6 sm:p-16">
                        <div className="space-y-4">
                            <img src={logo}
                                 loading="lazy" className="w-10" alt="blog logo"/>
                            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Login to unlock the <br/> best
                                of Meta<span className='font-bold'>Blog</span></h2>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="mt-6 grid space-y-4">
                            {loginInputList.map(item => (
                                <div key={item.id}>
                                    <label
                                        htmlFor={item.title}
                                        className="block text-sm font-medium"
                                    >
                                        {item.title}
                                    </label>
                                    <input
                                        id={item.title}
                                        name={item.title}
                                        type={item.type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[item.title]}
                                        className="p-1 mt-1 border block w-full rounded-md border-gray-400 text-black shadow-lg"
                                    />
                                    {formik.touched[item.title] && formik.errors[item.title] ? (
                                        <div className="text-red-600 text-xs pt-2">
                                            {formik.errors[item.title] as string}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <button
                                type='submit'
                                className='w-full mt-8 bg-gray-600 text-white py-2 px-4 rounded-md shadow-lg duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2'>
                                Login
                            </button>
                        </form>
                        <div className='pt-3'>
                            <GoogleLogin/>
                        </div>
                        <div className='pt-4 border-t mt-6'>
                            <p className='text-center font-medium text-lg mt-2'>
                                If you don't have account
                                <Link
                                    onClick={() => dispatch(clearMessage())}
                                    to='/auth/register'
                                    className='block text-cyan-800 font-semibold text-xl mt-2 hover:text-indigo-600 duration-200 hover:underline'
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {notification}
        </div>
    )
}