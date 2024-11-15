import {GoogleLogin} from "./GoogleLogin.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import {useFormik, FormikValues} from "formik";
import {notificationResponse, registrationInputList} from "@/shared/utils/authList.ts";
import {clearMessage, registration} from "@/app/providers/StoreProvider/config/AuthSlice.ts";
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {UseMessage} from "@/shared/hooks/UseMessage.tsx";
import logo from '../../../assets/home/logo.png';
import * as Yup from "yup";


export const Registration = () => {
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();

    const message = useSelector((state: RootState) => state.authSlice.notificationMessage)
    const status: string | undefined = notificationResponse[message];

    const notification = UseMessage({type: 'Registration', message, status, isShow})

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required().trim(),
            email: Yup.string().email().required().trim(),
            password: Yup.string().required().min(8),
            repeatPassword: Yup.string().required().trim().oneOf([Yup.ref('password'), 'Passwords must match'])
        }),
        onSubmit: (values: FormikValues) => {
            const {username, email, password} = values;
            dispatch(registration({username, email, password}));
            setIsShow(!isShow)
        }
    });

    useEffect(() => {
        if (status === 'success') {
            navigate('/auth/login')
            dispatch(clearMessage())
        }
    }, [status, navigate]);

    return (
        <div className="relative pt-4 container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-2xl">
                    <div className="p-6 sm:p-16">
                        <div className="space-y-4">
                            <img src={logo} loading="lazy" className="w-10" alt="blog logo"/>
                            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br/> best of
                                Meta<span className='font-bold'>Blog</span></h2>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="mt-6 grid space-y-4">
                            {registrationInputList.map(item => (
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
                                        <div className="text-red-600 text-xs pt-1">
                                            {formik.errors[item.title] as string}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <button type='submit'
                                    className='w-full bg-gray-600 text-white py-2 px-4 rounded-md shadow-lg duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2'>
                                Register
                            </button>
                        </form>
                        <div className='mt-3'>
                            <GoogleLogin/>
                        </div>
                        <div className='pt-4 border-t mt-6'>
                            <p className='text-center font-medium text-lg mt-2'>
                                Already have an account?
                                <Link
                                    onClick={() => dispatch(clearMessage())}
                                    to='/auth/login'
                                    className='block text-cyan-800 font-semibold text-xl mt-2 hover:text-indigo-600 duration-200 hover:underline'
                                >
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {notification}
        </div>
    );
};
