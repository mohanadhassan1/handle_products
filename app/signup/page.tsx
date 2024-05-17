"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import "../globals.css";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import InputErrorMessage from "@/components/ui/InputErrorMessage";
import { REGISTER_FORM } from "@/data";
import { registerSchema } from "@/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/ui/Button";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(registerSchema) });
  
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("DATA", data);
    setIsLoading(true);

    localStorage.setItem("userData", JSON.stringify(data));
    router.push("/login");
  };


  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, validation }, idx) => {
      return (
        <div key={idx}>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
          {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
        </div>
      );
    }
  );

  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex flex-col justify-center items-center lg:w-1/4 md:w-1/2 sm:w-full px-6 py-12 lg:px-8 bg-gray-300 border border-gray-400 shadow-lg rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {renderRegisterForm}
            <Button fullWidth isLoading={isLoading}>
              {isLoading ? "Loading... " : "Submit"}
            </Button>
          </form>

          <div className="flex w-full mt-5">
            <hr className="flex-1 border-b border-gray-600 mt-3" />
            <p className="mx-4">OR</p>
            <hr className="flex-1 border-b border-gray-600 mt-3" />
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );


};

export default Signup;