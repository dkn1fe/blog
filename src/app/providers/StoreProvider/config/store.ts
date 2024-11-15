import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice} from "./AuthSlice.ts";
import {ProfileSlice} from "./ProfileSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice:AuthSlice.reducer,
        profileSlice:ProfileSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch