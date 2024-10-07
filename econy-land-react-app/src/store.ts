// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginSliceReducer from './Pages/Login/loginSlice';


export const store = configureStore({
    reducer: {
     login: loginSliceReducer,   
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;