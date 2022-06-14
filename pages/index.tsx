import { useUser } from '@supabase/supabase-auth-helpers/react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
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

  if (user && !fullUser) {
    console.log('user',user)
    console.log('fuser',fullUser)
    router.push('/signUp');
  } else if (user && fullUser) {
    router.push('/home'); 
  }

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
      <div className="flex items-center justify-center h-screen lg:col-span-1 md:col-span-1">
        <div className="px-4 h-80 ">
          <div>
            <Image
              src="/images/logo-2.png"
              alt="logo"
              width={300}
              height={100}
              objectFit="cover"
            />
          </div>
          <h1>Second Chance</h1>
          <div>
            <p className="pt-2 pb-2 text-4xl font-bold">
              Sign in to your account
            </p>
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

      <div className="lg:col-span-2 md:col-span-2 relative h-[100vh] hidden lg:block">
        <Image
          src="/images/login-poster.jpg"
          alt="login poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default LogIn;