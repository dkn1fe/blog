import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthService} from "../../../../shared/services/services.ts";
import {UserType} from "../../../../entities/UserType.ts";

const initialState = {
    token: '' as string,
    users:[],
    userData: {} as {} | null,
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
    },
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {
            state.userData = action.payload
            state.token = action.payload.token as string
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.userData = action.payload
            state.isAuth = true
            state.token = action.payload.token as string
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.userData = action.payload
            state.isAuth = true
        })
        builder.addCase(onGetAllUsers.fulfilled,(state,action)=>{
            state.users = action.payload
        })
    }
})


export const registration = createAsyncThunk(
    'auth/register',
    async ({username, email, password, role = 'author'}:UserType) => {
        return AuthService.registration({username, email, password, role})
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}:UserType) => {
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
    async()=>{
        return AuthService.getAllUsers()
    }
)

export const {loginSistem, logoutSistem} = AuthSlice.actions;
export default AuthSlice.reducer;

