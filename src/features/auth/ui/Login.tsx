import {loginInputList, registrationInputList} from '../../../shared/utils/authList.ts'
import { useFormik, FormikValues } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/home/logo.png";
import {GoogleLogin} from "./GoogleLogin.tsx";


export const Login = () => {
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema:Yup.object().shape({
            email:Yup.string().required().email().trim(),
            password: Yup.string().required().trim(),
        }),
        onSubmit:(values:FormikValues) => {
            const {email,password} = values;
        }
    })
    return (
        <div className="relative pt-16 container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-2xl">
                    <div className="p-6 sm:p-16">
                        <div className="space-y-4">
                            <img src={logo}
                                 loading="lazy" className="w-10" alt="blog logo"/>
                            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br/> best
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
                        </form>
                        <button className='w-full mt-8 bg-gray-600 text-white py-2 px-4 rounded-md shadow-lg duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2'>
                            Login
                        </button>
                        <div className='mt-3'>
                            <GoogleLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}