import React, { Fragment, ReactElement, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import BrandDk from "./BrandDk";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Resources, NavRoutes, AuthRoutes } from "types";

type props = {
  resources:Resources,
  navRoutes:NavRoutes,
  authRoutes:AuthRoutes
}
const MobileDropDown:React.FC<props> = ({resources, navRoutes, authRoutes}) => {
  return (
    <>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
         <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <BrandDk />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {resources.map((item) => (
                    <Link href={item.href} key={item.key}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 text-teal-900"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-800">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {navRoutes.map((item) => (
                  <Link href={item.href} key={item.key}>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
              <Link href="/signup">
                <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-teal-700 border border-transparent rounded-md shadow-sm hover:bg-teal-900">
                  Sign up
                </a>
              </Link>

                
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?{" "}
                  <Link href='/login'>
                    <a className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
        
      </Transition>
    </>
  )
}

export default MobileDropDown