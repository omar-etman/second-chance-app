import { useUser } from '@supabase/supabase-auth-helpers/react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import Logo from '../components/Brand'
import { useRouter } from 'next/router';
import { authState } from 'slices/auth.slice';
import {authFullUser} from 'slices/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/hook';
import useSWR from 'swr';
import axios from 'axios';
import FadeInTrans3 from 'components/transitions/FadeInTrans3';
import FadeInTrans2 from 'components/transitions/FadeInTrans2';
import FadeInTrans1 from 'components/transitions/FadeInTrans1';
import { useCallback, useEffect } from 'react';
import EmailSignIn from 'components/EmailSignIn';


// type props = {};

// const dbFetcher = (url:string) => axios.get(url).then((res) => res.data)
const LogIn:React.FC = () => {
  
  
  const { user } = useUser();
  // const { fullUser } = useAppSelector(authState);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  // const {data, error} = useSWR(`/api/user/${user?.id}`, dbFetcher )
  
  
  const router = useRouter();
  const loginWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
    // if(data){
    //   router.push('/');
    // }else{
    //   router.push('/signup')
    // }
    
    console.log({ user, session, error });
  };

  const loginWithFaceBook = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook'
    });
    // if(data){
    //   router.push('/');
    // }else{
    //   router.push('/signup')
    // }
    console.log({ user, session, error });
  };

  const signInWithEmail = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      //check if the email & the password exist in db
      // if not route to signUp or return error
      email: '',
      password: 'example-password',
    })
  }

  // const getFullUser = useCallback( async () => {
  //   if (user && !data || data === null || undefined) {
  //     router.push('/signup');
  //   } else if (user && data) {
  //     router.push('/'); 
  //   } else if (!user) {
  //     return
  //   }
  // }, [user, data, router]) 

  useEffect(() => {
  if(!user){
    router.push('/signup')
  } else {
    return
  }
  }, [router, user]);


  // console.log(data)

  console.log({ user });

  // if(!user){
  //   router.push('/signup')
  // } else {
  //   return
  // }

  return (
    <div className="grid min-h-screen text-gray-100 bg-teal-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center justify-center h-screen lg:col-span-1 md:col-span-1">
        <div className="px-4 mb-[2rem]">
          {/* into block */}
        <div className='flex flex-col items-center justify-center mb-[2.5rem]'>
            <div className='relative mb-2 h-25'>
              <FadeInTrans1>  
                <Image
                src="/assets/images/logo-white.png"
                alt="logo"
                width={170}
                height={170}
                objectFit="contain"
                />
              </FadeInTrans1>
            </div>
            <div className='text-center font-thin text-[2.5rem]'>
              <FadeInTrans2>
                <span className='border-b'>Second Chance</span> 
              </FadeInTrans2>
            </div>
            <div className='font-light text-center text-[1.2rem] leading-0'>
              <FadeInTrans3>
                <span>we rescue them ... they save us.</span> 
              </FadeInTrans3>
            </div>
            {/* <p className='font-[0.3rem]'>we rescue them ... they save us</p> */}
        </div>
        {/* SIGNIN LABEL */}
          <div className="flex-col items-center justify center">
            <h1 className="pt-2 pb-2 text-3xl font-bold">
              Sign in to your account
            </h1>
            <span className="">Or create a new acount</span>
          </div>
          
          <div className="w-full mt-6">
            <EmailSignIn
              signInWithEmail={signInWithEmail}
            />
            <button
              onClick={() => loginWithGoogle()}
              className="text-white bg-[#502000] focus:outline-none  font-medium rounded-lg text-sm  px-5 py-3 text-center self-center w-full mb-5 transition-all duration-200 hover:bg-[#9C3E00]"
            >
              GOOGLE
            </button>
            <button
              onClick={() => loginWithFaceBook()}
              className="text-white bg-[#502000] focus:outline-none  font-medium rounded-lg text-sm  px-5 py-3 text-center self-center w-full mb-5 transition-all duration-200 hover:bg-[#9C3E00]"
            >
              FACEBOOK
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 md:col-span-1 relative h-[100%] hidden md:block">
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