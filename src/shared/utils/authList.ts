export const REACT_GOOGLE_API_TOKEN = '972875495050-91iq3vke4n3cp7s48o72kd9mdfekcfa5.apps.googleusercontent.com'

export const registrationInputList = [
    {id: 1, title: 'username', type: 'text'},
    {id: 2, title: 'email', type: 'email',},
    {id: 3, title: 'password', type: 'password',},
    {id: 4, title: 'repeatPassword', type: 'password',},
]
export const loginInputList = [
    {id: 1, title: 'email', type: 'email',},
    {id: 2, title: 'password', type: 'password',},
]


export const handleRegisterAndLoginGoogle = async ({dispatch, registration, login, email, password, username}: any) => {
    await dispatch(registration({username, email, password}));
    return dispatch(login({email, password}));
};

export const notificationResponse: Record<string, 'failed' | 'success'> = {
    'This user already registered': 'success',
    'Invalid Credentials': 'failed',
    'Login success': 'success',
    'User registered successfully': 'success'
}

