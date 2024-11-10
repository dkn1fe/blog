import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthService} from "../../../../shared/services/services.ts";
import {UserType} from "../../../../entities/UserType.ts";

interface AuthStateType {
    token: string,
    users: UserType[],
    typeNotificationMessage: 'failed' | 'success' | 'idle',
    notificationMessage:string,
    userData: UserType | null | {}, // поменять тип
    isAuth: boolean,
}

const initialState: AuthStateType = {
    token: '',
    users: [],
    typeNotificationMessage: 'idle',
    notificationMessage:'',
    userData: {},
    isAuth: false,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSistem: (state, action) => {
            state.userData = action.payload
            state.isAuth = true
        },
        logoutSistem: (state) => {
            state.userData = null
            state.isAuth = false
        },
        clearMessage:(state)=>{
            state.notificationMessage = ''
            state.typeNotificationMessage = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {
            state.userData = action.payload
            state.token = action.payload.token
            state.notificationMessage = action.payload.message
        })
        builder.addCase(registration.rejected, (state) => {
            state.notificationMessage = 'This user already registered'
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.userData = action.payload
            state.token = action.payload.token
            state.notificationMessage = action.payload.message
            state.isAuth = true
        })
        builder.addCase(login.rejected, (state) => {
            state.notificationMessage = 'Invalid Credentials'
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.userData = action.payload
            state.isAuth = true
        })
        builder.addCase(onGetAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})


export const registration = createAsyncThunk(
    'auth/register',
    async ({username, email, password, role = 'author'}: UserType) => {
        return AuthService.registration({username, email, password, role})
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: UserType) => {
        return AuthService.login({email, password})
    }
)
export const getProfile = createAsyncThunk(
    'auth/profile',
    async () => {
        return AuthService.getMe()
    }
)
export const onGetAllUsers = createAsyncThunk(
    'auth/allUsers',
    async () => {
        return AuthService.getAllUsers()
    }
)

export const {loginSistem, logoutSistem,clearMessage} = AuthSlice.actions;
export default AuthSlice.reducer;

