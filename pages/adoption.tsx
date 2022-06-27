import { useUser } from "@supabase/supabase-auth-helpers/react";
import AdoptionForm from "components/adoptionPostPageComponents/AdoptionForm";
import Layout from "components/Layout";
import React from "react";
import Image from "next/image";

const poster = "/assets/images/adoption-poster.jpg";

const AdoptionPost: React.FC = () => {
  const user = useUser();
  //will be needed for route protection
  return (
    <Layout>
      <div className="grid min-h-screen text-gray-100 sm:grid-cols-1 md:grid-cols-2 pt-9">
        <div className="flex flex-col items-center justify-start col-span-1">
          <div className="mt-0 md:mt-[2.5rem] w-4/5">
            <div className="relative flex flex-row items-center justify-start w-full mb-20 h-30">
              <Image
                src="/assets/images/logo-white.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
              <div className="flex flex-col items-center justify-start ml-3">
                <h2 className="pt-2 pb-2 ml-2 text-4xl font-bold">
                  Adoption post form
                </h2>
                <p className="font-light text-[0.8rem]">
                  please fill the form below to provide your pet with needed introduction.
                </p>
              </div>
            </div>
            <div className="mb-3">
              <AdoptionForm />
            </div>
          </div>
        </div>

        <div className="md:col-span-1 relative h-[100%] hidden md:block md:pt-10 lg:pt-40">
          <Image
            src={poster}
            alt="adoption poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AdoptionPost;
