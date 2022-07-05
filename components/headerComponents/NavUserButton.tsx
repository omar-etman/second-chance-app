import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, ReactElement, useEffect } from "react";
import Image from "next/image";
import { classNames } from "../../utils/classNames";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { useRouter } from "next/router";
import { supabase } from "utils/supabase";

const NavUserButton: React.FC = () => {
  const { user, isLoading } = useUser();
  const dummyAvatar =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const router = useRouter();
  const signoutWithGoogle = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const firstNameAndLastName = `${user?.user_metadata.firstName} ${user?.user_metadata.lastName}`;
  const userName = user?.user_metadata.name;

  useEffect(() => {
    console.log("nav button", { user, isLoading });
  }, [user, isLoading]);
  return (
    <Menu as="div" className="relative hidden ml-3 lg:block">
      <div>
        <Menu.Button className="flex px-3 text-sm rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0">
          <span className="sr-only">Open user menu</span>
          <div className="flex flex-row items-center justify-center">
            <span className="mr-3 font-light text-gray-200 text-[1.2rem] transition-all duration-300 hover:text-white">
              {userName || firstNameAndLastName}
            </span>
            <div className="relative transition-all rounded-full h-9 w-9">
              <Image
                src={user?.user_metadata.avatar_url || dummyAvatar}
                alt=""
                layout="fill"
                objectFit="contain"
                className="inline-block w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }: { active: Boolean }): ReactElement => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: Boolean }): ReactElement => (
              <div
                // href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Settings
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: Boolean }): ReactElement => (
              <a
                href="#"
                onClick={() => signoutWithGoogle()}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavUserButton;
