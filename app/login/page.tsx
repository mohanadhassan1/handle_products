'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
// import { useAuth } from "../../context/AuthContext";
import "../globals.css";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import InputErrorMessage from "@/components/ui/InputErrorMessage";
import { LOGIN_FORM } from "@/data";
import { loginSchema } from "@/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ui/Button";
import { revalidatePath } from "next/cache";
interface  IFormInput{
  email:string;
  password:string;
}

const Login = () => {
  
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>({resolver:yupResolver(loginSchema)})
  const [isLoading, setIsLoading] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    setIsLoading(true);
    
    const userData = localStorage.getItem("userData");

    const email = data.email;
    const password = data.password;


    if (userData) {
      const userDatastr = JSON.parse(userData);
      console.log(userDatastr);
      
      if (userDatastr.email === email && userDatastr.password === password) {
        router.push("/");
        
      } else {
        setLoginError("Invalid email or password");
        setIsLoading(false);
      }
    } else {
      setLoginError("User not found");
      setIsLoading(false);
    }
    // revalidatePath('/');
    
  }
  
  const renderLoginForm = LOGIN_FORM.map(({name, placeholder, type, validation}, idx)=>{
    return(
      <div key={idx}>
        <Input
        placeholder={placeholder}
        type={type}
        {...register (name, validation)}
        />
        {errors[name] && <InputErrorMessage msg={errors[name]?.message}/>} 
      </div>
    )
  })
    return (
      
      <div className="flex items-center justify-center my-8">
      <div className="flex flex-col justify-center items-center lg:w-1/4 md:w-1/2 sm:w-full px-6 py-12 lg:px-8 bg-gray-300 border border-gray-400 shadow-lg rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {loginError && <div className="text-red-500 mb-4 bg-red-100 flex items-center justify-center rounded-md py-2">{loginError}</div>}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {renderLoginForm}
  
        <Button fullWidth isLoading={isLoading}>
          Submit
        </Button>
      </form>
      <div className="flex w-full mt-5">
               <hr className="flex-1 border-b border-gray-600 mt-3" />
               <p className="mx-4">OR</p>
               <hr className="flex-1 border-b border-gray-600 mt-3" />
             </div>
             <p className="mt-10 text-center text-sm text-gray-500">
               Don&apos;t have account?{" "}
               <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Signup</Link>
             </p>
           </div>
         </div>
       </div>
        )

  }
  
  export default Login