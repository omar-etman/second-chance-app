import { useUser } from '@supabase/supabase-auth-helpers/react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import Logo from '../components/Brand'
import { useRouter } from 'next/router';
import { authState } from 'slices/auth.slice';
import {authFullUser} from 'slices/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/hook';


// type props = {};


const LogIn: React.FC = () => {

  const { user } = useUser();
  const { fullUser } = useAppSelector(authState);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const router = useRouter();
  const loginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
    router.push('/home');
    console.log({ user, session, error });
  };

  console.log({ user, fullUser });

  

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="flex items-center justify-center h-screen lg:col-span-1 md:col-span-1">
        <div className="px-4 mb-[2rem]">
        <div className='flex-row items-center justify-center ml-[1rem]'>
            <div className='relative mb-2 h-25'>
                <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={250}
                height={250}
                objectFit="contain"
                />
            </div>
            <span className='text-[2rem] font-bold text-center'>Second Chance</span>
            {/* <p className='font-[0.3rem]'>we rescue them ... they save us</p> */}
        </div>
          <div className="flex-col items-center justify center">
            <h1 className="pt-2 pb-2 text-4xl font-bold">
              Sign in to your account
            </h1>
            <span className="">Or create a new acount</span>
          </div>
          <div className="w-full mt-6">
            <button
              onClick={() => loginWithGoogle()}
              className="w-full py-3 mb-2 text-white bg-black rounded-md"
            >
              GOOGLE
            </button>
          </div>
        </div>
      </div>

      <div className="relative hidden w-full h-full lg:col-span-2 md:col-span-2 lg:block">
        <Image
          src="/assets/images/login-poster.jpg"
          alt="login poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default LogIn;