import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { resources } from "../utils/navTabs";

const NavBarDropDown: React.FC = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
              >
                <item.icon
                  className="flex-shrink-0 w-6 h-6 text-teal-900"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
            <div className="mt-5 text-sm">
              <Link href="/rescue">
                <a className="font-medium text-teal-900 hover:text-brown-500">
                  meet our friends <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default NavBarDropDown;
