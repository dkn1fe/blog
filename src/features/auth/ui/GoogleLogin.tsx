import {GoogleLogin as Google} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../app/providers/StoreProvider/config/store.ts";
import {login, registration} from "../../../app/providers/StoreProvider/config/AuthSlice.ts";
import {handleRegisterAndLogin} from "../../../shared/utils/authList.ts";
import {useNavigate} from "react-router-dom";

interface ExtendedJwtPayload {
    email: string;
    given_name: string;
}

export const GoogleLogin = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()


    return (
        <div className='pt-6'>
            <Google
                size='large'
                logo_alignment='left'
                shape='circle'
                onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode<ExtendedJwtPayload>(credentialResponse.credential as string)
                    const {email, given_name} = decoded
                    let password = given_name, username = given_name
                    handleRegisterAndLogin({
                        dispatch,
                        email,
                        username,
                        password,
                        login,
                        registration
                    }).then(res => console.log(res))
                    navigate('/')
                }}
                onError={() => {
                    console.log('Login Failed')

                }}/>
        </div>
    )
}