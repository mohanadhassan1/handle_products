'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  email: string | null;
  password: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  password: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;
      localStorage.removeItem('userData');
    },
    loadUserFromStorage: (state) => {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        state.name = userData.name;
        state.email = userData.email;
        state.password = userData.password;
        state.isLoggedIn = true;
      }
    },
  },
});

export const { setUser, logout, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
