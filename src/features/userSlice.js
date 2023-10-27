import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    password: "",
    userId: "",
    isLogin: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        setUser: (state, action) => {
            const { email, password, userId, isLogin } = action.payload;
            state.email = email;
            state.password = password;
            state.userId = userId;
            state.isLogin = isLogin;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
