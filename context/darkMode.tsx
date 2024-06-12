// import React, { createContext, useContext, useState, useEffect } from "react";

// type DarkModeContextType = {
//   isDarkMode: boolean;
//   toggleDarkMode: () => void;
// };

// const DarkModeContext = createContext<DarkModeContextType>({
//   isDarkMode: false,
//   toggleDarkMode: () => {},
// });

// export const useDarkMode = () => useContext(DarkModeContext);

// export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode');
//     if (savedDarkMode) {
//       setIsDarkMode(JSON.parse(savedDarkMode));
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => {
//       const newMode = !prev;
//       localStorage.setItem('darkMode', JSON.stringify(newMode));
//       return newMode;
//     });
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };


