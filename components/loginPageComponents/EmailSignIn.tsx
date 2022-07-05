import { LockClosedIcon } from "@heroicons/react/outline"
import Link from "next/link";

type props = {
  signInWithEmail: () => Promise<void>
}



const EmailSignIn:React.FC<props> = ({signInWithEmail}) => {

  
  return (
    <>
      <div className="flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          <div>
            <h2 className="mt-6 text-3xl font-medium text-center text-gray-100">Login</h2>
            <p className="mt-2 text-sm text-center text-gray-300">
              Or{' '}
              <Link href='/signup'>
                <a className="font-medium text-teal-600 transition-all duration-200 hover:text-[#9C3E00]">
                  sign up for an accout
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-[#9C3E00] focus:border-[#9C3E00] focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-[#9C3E00] focus:border--[#9C3E00] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-[#502000] focus:outline-none  font-medium rounded-lg text-sm  px-5 py-3 text-center self-center w-full mb-5 transition-all duration-200 hover:bg-[#9C3E00]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmailSignIn