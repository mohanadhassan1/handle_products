// 'use client'

// import React, { useContext, useEffect, useState } from "react";
// import { ThemeContext } from './../context/ThemeContext';

// const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const { theme } = useContext(ThemeContext);
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);        
//       }, []);
    
//       if(mounted) {
//         return <div className={`theme-${theme}`}>{children}</div>
//       }
//       return <div className={theme}>{children}</div>;
// };

// export default ThemeProvider;