"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
import { useRouter } from "next/navigation";


const navigation = [{ name: "SPACEJAT", href: "/", current: true },{ name: "product", href: "/product", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState<string | null>(null);

  const storageKey = "userData";

  useEffect(() => {
    const userDataString = localStorage.getItem(storageKey);
    const userData = userDataString ? JSON.parse(userDataString) : null;
    setIsLoggedIn(userData !== null);
    
    if (userData !== null) {
      setName(userData.name);
    }
  }, [isLoggedIn]);

  const onLogout = () => {
    localStorage.removeItem(storageKey);
    setIsLoggedIn(false);
    setName(null);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <Disclosure as="nav" className="bg-gray-300 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    width="22"
                    height="40"
                    viewBox="0 0 22 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9675 37.3955L15.3885 39.8751C15.4499 39.9356 15.5274 39.9763 15.6115 39.9924C15.6956 40.0084 15.7824 39.999 15.8613 39.9653C15.9401 39.9317 16.0074 39.8752 16.0548 39.803C16.1023 39.7308 16.1277 39.646 16.128 39.5592V34.1656L12.9675 37.3955Z"
                      fill="#26B7CD"
                    />
                    <path
                      d="M19.057 6.92705L21.3923 6.50852C21.5035 6.48887 21.6073 6.43854 21.6922 6.36304C21.7771 6.28754 21.8399 6.18979 21.8736 6.08049C21.9074 5.9712 21.9109 5.85458 21.8836 5.74343C21.8564 5.63227 21.7995 5.53087 21.7192 5.45033L16.6126 0.190986C16.533 0.107162 16.4319 0.0476069 16.3206 0.0190561C16.2094 -0.00949484 16.0925 -0.005903 15.9832 0.0294254C15.8738 0.0647539 15.7764 0.13041 15.7019 0.218969C15.6275 0.307528 15.5789 0.415457 15.5617 0.530553L15.1492 2.9786L19.057 6.92705Z"
                      fill="#26B7CD"
                    />
                    <path
                      d="M13.9567 17.9813L2.16322 30.0636C1.86071 30.3816 1.69165 30.8062 1.69165 31.2481C1.69165 31.6901 1.86071 32.1147 2.16322 32.4327L8.24288 38.7028C8.55441 39.0134 8.97374 39.1875 9.41054 39.1875C9.84735 39.1875 10.2667 39.0134 10.5782 38.7028L12.5088 36.7207L15.6926 33.4672L21.2118 27.813C21.5179 27.4969 21.6895 27.0716 21.6895 26.6284C21.6895 26.1853 21.5179 25.7599 21.2118 25.4439L13.9567 17.9813Z"
                      fill="#26B7CD"
                    />
                    <path
                      d="M7.70638 23.1706L19.4998 11.0646C19.8023 10.7466 19.9714 10.322 19.9714 9.88008C19.9714 9.43818 19.8023 9.01352 19.4998 8.69555L13.4202 2.47278C13.2702 2.31713 13.0909 2.1936 12.893 2.1095C12.6951 2.0254 12.4826 1.98244 12.2681 1.98317C12.0523 1.98227 11.8386 2.02512 11.6394 2.1092C11.4402 2.19328 11.2596 2.31689 11.1082 2.47278L0.474624 13.3705C0.170298 13.6875 0 14.1126 0 14.5551C0 14.9976 0.170298 15.4226 0.474624 15.7396L7.70638 23.1706Z"
                      fill="#26B7CD"
                    />
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-600 hover:bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-transparent text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <span>{name ? `Hello, ${name}` : "Register"}</span>
                      <ChevronDown />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                              isLoggedIn ? "hidden" : ""
                            )}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/signup"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                              isLoggedIn ? "hidden" : ""
                            )}
                          >
                            Signup
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/"
                            onClick={onLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                              isLoggedIn ? "" : "hidden"
                            )}
                          >
                            Log out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-600 hover:bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",

                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
