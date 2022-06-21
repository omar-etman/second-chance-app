import AnimalsList from "components/AnimalsList";
import Layout from "components/Layout";
import React from "react";

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
      <div className="flex flex-col items-center justify-center pt-8 m-0 bg-[#00939C] w-full min-h-[35rem]">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100">
          Meet the current Second Chance household
        </span>
        <AnimalsList />
      </div>
    </Layout>
  );
};

export default Rescue;
