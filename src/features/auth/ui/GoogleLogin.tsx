import {GoogleLogin as Google} from "@react-oauth/google";

export const GoogleLogin = () => {
    return (
        <div className='pt-6'>

            <Google
                size='large'
                logo_alignment='left'
                shape='circle'
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed')

                }}/>
        </div>
    )
}