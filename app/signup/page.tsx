'use client';

import React from "react";
// import { useRouter } from 'next/navigation'
import { AuthProvider, useAuth } from "../context/AuthContext"
import "../globals.css";
import Link from "next/link";

const Signup: React.FC = () => {
  
  // const router = useRouter();
  const { signup } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await signup(formData);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center lg:w-1/4 md:w-1/2 sm:w-full px-6 py-12 lg:px-8 bg-gray-300 border border-gray-400 shadow-lg rounded-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="flex w-full mt-5">
              <hr className="flex-1 border-b border-gray-600 mt-3" />
              <p className="mx-4">OR</p>
              <hr className="flex-1 border-b border-gray-600 mt-3" />
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have account?{" "}
              <Link href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;