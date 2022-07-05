import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Brand from "./Brand";
import { resources, navRoutes, authRoutes } from "../../utils/navTabs/index";
import MobileDropDown from "../headerComponents/MobileDropDown";
import NavBar from "../headerComponents/NavBar";
import NavAuthButtons from "../headerComponents/NavAuthButtons";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import NavUserButton from "../headerComponents/NavUserButton";
import React from "react";
// import { controlledRender } from "utils/controlledRendering";
const Header: React.FC = () => {
  const { user, isLoading } = useUser();
  const AuthHandling = () => {
    if (isLoading) return <></>;

    if (!user) {
      return <NavAuthButtons />;
    } else {
      return <NavUserButton />;
    }
  };

  console.log(user);

  return (
    <Popover className="w-full ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        {/* navbar container */}
        <div className="flex items-center justify-between py-3 md:space-x-10">
          {/* {mobile view brand} */}
          <div className="flex justify-start lg:hidden">
            <Link href="/">
              <a>
                <Brand />
              </a>
            </Link>
          </div>
          {/* Burger button */}
          <div className="-my-2 -mr-2 md:flex md;justify-end lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-200 rounded-md bg-none hover:text-white focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="flex w-6 h-6 lg:hidden" aria-hidden="true" />
            </Popover.Button>
          </div>
          <NavBar />
          <AuthHandling />
          {/* {controlledRender(<NavUserButton/>,<NavAuthButtons/>,user)} */}
        </div>
      </div>
      <MobileDropDown
        resources={resources}
        navRoutes={navRoutes}
        authRoutes={authRoutes}
      />
    </Popover>
  );
};

export default Header;
