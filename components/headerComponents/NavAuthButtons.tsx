import Link from "next/link";
import React from "react";

const NavAuthButtons:React.FC = () => {
  return (
    <div className="items-center justify-end hidden lg:flex lg:flex-1 lg:w-0">
      <Link href="/login">
        <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white  bg-[#00939C] border border-transparent transition-all duration:200 rounded-md shadow-sm whitespace-nowrap hover:bg-[#10ABB4]">
          Sign in
        </a>
      </Link>
      <Link href="/signup">
        <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white  bg-[#502000] border border-transparent transition-all duration:200 rounded-md shadow-sm whitespace-nowrap hover:bg-[#9C3E00]">
          Sign up
        </a>
      </Link>
    </div>
  );
}

export default NavAuthButtons;
