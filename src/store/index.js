import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice';


const rootReducer = {
    user: userSlice,
};


export const store = configureStore({
    reducer: rootReducer,
})

