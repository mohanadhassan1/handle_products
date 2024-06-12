// 'use client'

// import React, { createContext, useState, useEffect } from "react";


// export const ThemeContext = createContext<{ theme: string; toggle: () => void }>({
//     theme: "light",
//     toggle: () => {},
//   });

// const getFromLocalStorage = () => {
//     if(typeof window !== 'undefined') {
//         const value = localStorage.getItem('theme');
//         return value || 'light';
//     }
//     return 'light';
// };

// export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

//   const [theme, setTheme] = useState(() => {
//     return getFromLocalStorage();
//   });

//   const toggle = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggle }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
