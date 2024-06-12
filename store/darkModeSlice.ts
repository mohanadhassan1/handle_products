'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  // mode: boolean | null;
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: typeof window !== 'undefined' ? (localStorage.getItem('darkMode') as 'light' | 'dark') || 'light' : 'light',
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('darkMode', state.mode);
    },
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      localStorage.setItem('darkMode', state.mode);
    },

    // setUser: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    //   state.password = action.payload.password;
    //   state.isLoggedIn = true;
    //   localStorage.setItem('userData', JSON.stringify(action.payload));
    // },
    // logout: (state) => {
    //   state.name = null;
    //   state.email = null;
    //   state.password = null;
    //   state.isLoggedIn = false;
    //   localStorage.removeItem('userData');
    // },
    // loadUserFromStorage: (state) => {
    //   const userDataString = localStorage.getItem('userData');
    //   if (userDataString) {
    //     const userData = JSON.parse(userDataString);
    //     state.name = userData.name;
    //     state.email = userData.email;
    //     state.password = userData.password;
    //     state.isLoggedIn = true;
    //   }
    // },
  },
});

export const { toggleMode, setMode } = darkModeSlice.actions;
// export const { setUser, logout, loadUserFromStorage } = darkModeSlice.actions;
export default darkModeSlice.reducer;
