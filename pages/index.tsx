import { useUser } from '@supabase/supabase-auth-helpers/react';
import { createClient } from '@supabase/supabase-js';
import Layout from 'components/Layout';
import Image from 'next/image';
import { authState } from 'slices/auth.slice';
import {authFullUser} from 'slices/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/hook';


// type props = {};


const Home: React.FC = () => { 

  return (
    <Layout>
      {/* section one */}
      <div 
        className="flex flex-col items-center justify-end w-full h-screen m-0 bg-fixed bg-center bg-no-repeat bg-cover p-:0"
        style = {{backgroundImage: `url('/assets/images/background-1.jpg')`}}
      >
        <div className='relative m-0 h-30'>
            <Image
            src="/assets/images/logo-white.png"
            alt="logo"
            width={250}
            height={250}
            objectFit="contain"
            />
        </div>
        <h1 className='text-[3rem] lg:text-[4rem] mt-1 text-white'>SECOND CHANCE</h1>
        <span className='text-2xl text-white mb-14 lg:mb-8'>we rescue them ... they save us.</span>
      </div>
      
    </Layout>
  )
}

export default Home;