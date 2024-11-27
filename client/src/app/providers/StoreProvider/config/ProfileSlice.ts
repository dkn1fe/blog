import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ProfileService} from "@/shared/services/profile.ts";

interface ProfileState {
    notificationMessage: string
}

const initialState: ProfileState = {
    notificationMessage: '',
}


export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.notificationMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changeName.fulfilled, (state) => {
            state.notificationMessage = 'Username was changed'
        })
        builder.addCase(changeEmail.fulfilled, (state) => {
            state.notificationMessage = 'Email was changed'
        })
        builder.addCase(changePhone.fulfilled, (state) => {
            state.notificationMessage = 'Phone was changed'
        })
        builder.addCase(changeAvatar.fulfilled, (state) => {
            state.notificationMessage = 'Avatar was changed'
        })
    }
});

export const changeName = createAsyncThunk(
    'profile/changeName',
    async ({username}: { username: string }) => {
        return await ProfileService.changeName({username});
    }
);

export const changeEmail = createAsyncThunk(
    'profile/changeEmail',
    async ({email}: { email: string }) => {
        return await ProfileService.changeEmail({email});
    }
);

export const changePhone = createAsyncThunk(
    'profile/changePhone',
    async ({phone}: { phone: string }) => {
        return await ProfileService.changePhone({phone});
    }
)

export const changeAvatar = createAsyncThunk(
    'profile/changeAvatar',
    async ({avatar}: { avatar: File | null }) => {
        return ProfileService.changeAvatar({avatar})
    }
)

export const {clearMessage} = ProfileSlice.actions;
export default ProfileSlice.reducer;

