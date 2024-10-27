import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice} from "./AuthSlice.ts";

export const store = configureStore({
    reducer: {
        authSlice:AuthSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch