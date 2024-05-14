'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isLoggedIn: boolean;
  signup: (formData: FormData) => Promise<void>;
  login: (formData: FormData) => Promise<void>;
  logout: () => void;
};

// interface AuthContextType {
//   isLoggedIn: boolean;
//   signup: (formData: FormData) => Promise<void>;
//   login: (formData: FormData) => Promise<void>;
//   logout: () => void;
// }

const authContextDefaultValues: AuthContextType = {
  isLoggedIn: false,
  signup: async (formData: FormData) => {}, 
  login: async (formData: FormData) => {}, 
  logout: () => {},
};


const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

// const AuthContext = createContext<AuthContextType | undefined>(undefined);
// const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
export function AuthProvider({ children }: Props) {
  
  const router = useRouter();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userDataStr = localStorage.getItem("userData");
    const loggedIn = !!userDataStr;
    setIsLoggedIn(loggedIn);
  }, []);

  const signup = async (formData: FormData) => {
    const userData = Object.fromEntries(formData.entries());
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsLoggedIn(true);
    router.push("/login");
  };

  const login = async (formData: FormData) => {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const userDataStr = localStorage.getItem("userData");

    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      if (userData.email === email && userData.password === password) {
        setIsLoggedIn(true);
        router.push("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("User not found"); 
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
    router.push("/");
  };

  const value = {
    isLoggedIn, 
    signup, 
    login, 
    logout
};


  return (
    // <AuthContext.Provider value={{ isLoggedIn, signup, login, logout }}>
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export function useAuth() {
    return useContext(AuthContext);
}