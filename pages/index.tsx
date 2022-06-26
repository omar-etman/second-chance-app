import FadeInTrans1 from "components/transitions/FadeInTrans1";
import FeaturesList from "components/FeaturesList";
import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authState } from "slices/auth.slice";
import { authFullUser } from "slices/auth.slice";
import { useAppDispatch, useAppSelector } from "store/hook";
import FadeInTrans2 from "components/transitions/FadeInTrans2";
import FadeInTrans3 from "components/transitions/FadeInTrans3";

// type props = {};

const Home: React.FC = () => {

  return (
    <Layout>
      {/* section one */}
      <div
        className="flex flex-col items-center justify-end w-full min-h-[55rem] md:min-h-screen m-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/images/background-1.jpg')` }}
      >
        <FadeInTrans1>
          <div className="relative m-0 h-30 opacity-[0.7]">
            <Image
              src="/assets/images/logo-white.png"
              alt="logo"
              width={250}
              height={250}
              objectFit="contain"
            />
          </div>
        </FadeInTrans1>
          <div className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] mt-1 text-white">
        <FadeInTrans2>
           <h1 className='border-b'>SECOND CHANCE</h1>
        </FadeInTrans2>
          </div>
          <div className="text-[1.5rem] font-light text-white mt-0 mb-[9.5rem] leading-0 lg:mb-[5.5rem]">
        <FadeInTrans3>
            <span>we rescue them ... they save us.</span>
        </FadeInTrans3>
          </div>  
      </div>
      {/* {intro section} */}
      <div className="min-h-[30rem] bg-[#00939C] py-9 w-full flex flex-col justify-center items-center">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          Your friendly neighbourhood animal lovers
        </span>
        <p className="w-4/5 text-2xl font-light text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          consectetur at nemo saepe! Ullam reprehenderit, voluptatibus nisi quae
          voluptas quasi nihil architecto qui rem voluptates dolorum quas neque
          animi, iusto maxime iure itaque ab tempora eius quia nesciunt porro
          repellendus!
        </p>
      </div>
      {/* stories marker */}
      <div
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover min-h-[40rem] p-0"
        style={{ backgroundImage: `url('/assets/images/background-2.jpg')` }}
      >
        <span className="font-extrabold text-center text-gray-100 text-7xl lg:text-9xl opacity-[0.8]">
          MORE CHAPTERS
          <br />
          MORE BOOKS
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-2 m-0 bg-[#9C3E00] w-full min-h-[35rem]">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          Here are some of our rescue stories...
        </span>
        <FeaturesList />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[40rem] p-0"
        style={{ backgroundImage: `url('/assets/images/background-4.jpg')` }}
      >
        <span className="font-extrabold text-center text-gray-100 text-7xl lg:text-9xl opacity-[0.8] w-4/5">{`WE'VE GOT YOUR BACK`}</span>
      </div>
      <div className="flex flex-col items-center justify-center py-8 m-0 bg-[#00939C] w-full min-h-[35rem]">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          Since we aim to fill the world with rescuers we offer the following
          features
        </span>
        <FeaturesList />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[45rem] md:h-[50rem] lg:h-[40rem] p-0"
        style={{ backgroundImage: `url('/assets/images/background-8.jpg')` }}
      >
        <blockquote className="w-4/5 font-light text-center text-gray-100 text-[3rem] lg:text-9xl">
          {`“Sometimes, your pet picks you.”`}
        </blockquote>
        <span className="text-2xl text-center text-white lg:text-3xl mt-9 font-light">
          – Julie Wenzel.
        </span>
          <button className="p-6 transition-all bg-[#00939C] rounded-2xl duration:400 hover:bg-[#9C3E00] flex justify-center items-center my-8 max-w-[15rem] lg:max-w-[25rem]">
            <Link href="/rescue">
              <a className="text-2xl text-gray-100">
                Wanna meet your future pet ?
              </a>
            </Link>
          </button> 
      </div>
    </Layout>
  );
};

export default Home;
