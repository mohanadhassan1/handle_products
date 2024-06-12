'use client'

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import darkModeReducer from './darkModeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;