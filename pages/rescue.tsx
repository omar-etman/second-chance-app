import AnimalsList from "components/AnimalsList";
import Layout from "components/Layout";
import React from "react";
import Link from 'next/link'

const Rescue: React.FC = () => {
  return (
    <Layout>
      <div
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover min-h-[45rem] p-0"
        style={{
          backgroundImage: `url('/assets/images/rescue-background-1.jpg')`,
        }}
      >
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          We are resuers for life and we love it
        </span>
        <p className="w-4/5 text-2xl font-light text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          consectetur at nemo saepe! Ullam reprehenderit, voluptatibus nisi quae
          voluptas quasi nihil architecto qui rem voluptates dolorum quas neque
          animi, iusto maxime iure itaque ab tempora eius quia nesciunt porro
          repellendus!
        </p>

        {/* conditionally rendered if there is no login session */}
        {/* <p className="w-4/5 text-2xl font-light text-center text-white mt-9">
          note that you can see our currently accomodated friends but to be able to take action we need you to
          be
          <Link href='/login'>
            <a 
                
                className='mx-1 text-[#00939C] hover:font-bold transition-all duration-800'
                >
                    Signed in
                </a> 
            </Link> 
            to your account or to 
            <Link href='/signup'>
                <a
                    className='mx-1 text-[#9C3E00] hover:font-bold transition-all duration-800'
                >
                    Sign up
                </a> 
            </Link> 
                 for one, would be 
          a pleasure to welcome you onboard.  
        </p> */}
      </div>
      <div className="flex flex-col items-center justify-center pt-8 m-0 bg-[#00939C] w-full min-h-[35rem]">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100">
          Meet the current Second Chance household
        </span>
        <AnimalsList />
      </div>
      <div 
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[45rem] p-0"
        style = {{backgroundImage: `url('/assets/images/rescue-background-2.jpg')`}}
      >
        <blockquote className='w-4/5 font-light text-center text-gray-100 lg:text-6xl'>
        {`"Love the animals: God has given them the rudiments of thought and joy untroubled."`}
        </blockquote>
        <span className='text-3xl text-center text-white mt-9 mt-font-light'>- Fyodor Dostoevsky.</span>
        <button className='p-9 transition-all bg-[#9C3E00] rounded-2xl duration:400 hover:bg-[#00939C] flex justify-center items-center my-8'>
          <Link href='/help'>
            <a className='text-2xl text-gray-100'>
              Wanna ask something ?
            </a>
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default Rescue;
