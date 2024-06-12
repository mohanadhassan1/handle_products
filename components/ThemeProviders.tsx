// components/ThemeProvider.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleMode } from '../store/darkModeSlice';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(darkMode);
  }, [darkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
