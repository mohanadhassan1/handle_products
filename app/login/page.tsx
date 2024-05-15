'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../../context/AuthContext";
import "../globals.css";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import InputErrorMessage from "@/components/ui/InputErrorMessage";
import { LOGIN_FORM } from "@/data";
import { loginSchema } from "@/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ui/Button";

interface  IFormInput{
  email:string;
  password:string;
}

const Login = () => {
  
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>({resolver:yupResolver(loginSchema)})
  const [isLoading, setIsLoading] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);

  const router = useRouter();
  // const { login } = useAuth();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");



  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     await login(new FormData(event.currentTarget));
  //     // router.push("/");
  //   } catch (error) {
  //     setError("Invalid email or password");
  //   }

  // };

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    // console.log("DATA", data);
    setIsLoading(true);
    
    const userData = localStorage.getItem("userData");
    // console.log(userData)

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
      
      <div className="flex items-center justify-center h-screen">
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

    // return (

    //   <div className="max-w-md mx-auto">
    //   <h2 className="text-center mb-4 text-3xl font-semibold">
    //     Login to get access!
    //   </h2>
    //   <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
    //     {renderLoginForm}
  
    //     <Button fullWidth isLoading={isLoading}>
    //       Login
    //     </Button>
    //   </form>
    // </div>
    // )
  }
  
  export default Login

//   return (
//     <>
//       <div className="flex items-center justify-center h-screen">
//         <div className="flex flex-col justify-center items-center lg:w-1/4 md:w-1/2 sm:w-full px-6 py-12 lg:px-8 bg-gray-300 border border-gray-400 shadow-lg rounded-lg">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
//               Sign in
//             </h2>
//           </div>

//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="Enter your email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     placeholder="Enter your password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               {error && <div className="text-red-500">{error}</div>}

//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>

//             <div className="flex w-full mt-5">
//               <hr className="flex-1 border-b border-gray-600 mt-3" />
//               <p className="mx-4">OR</p>
//               <hr className="flex-1 border-b border-gray-600 mt-3" />
//             </div>
//             <p className="mt-10 text-center text-sm text-gray-500">
//               Don&apos;t have account?{" "}
//               <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Signup</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;