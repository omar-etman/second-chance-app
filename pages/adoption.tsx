import { useUser } from "@supabase/supabase-auth-helpers/react";
import AdoptionForm from "components/adoptionPostPageComponents/AdoptionForm";
import Layout from "components/generalAppComponents/Layout";
import { AuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import { setPendingRoute } from "slices/routing.slice";
import { useAppDispatch } from "store/hook";
import React, { useEffect } from "react";

const poster = "/assets/images/adoption-poster-4.jpg";
const currentRoute = '/adoption'
const AdoptionPost: React.FC = () => {
  
  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  const dispatch = useAppDispatch()
  //route protection code
  useEffect(() => {
    // checks if the user is authenticated
    const condition = authContext?.isUserAuthenticated()
    //set the current route to be the one the user gets redirected to upon logging in
    dispatch(setPendingRoute(currentRoute))
    if(!condition) router.push("/login");
   }, [authContext, dispatch, router]);
  
  return (
    <Layout>
      <div className="grid min-h-screen text-gray-100 bg-teal-900 sm:grid-cols-1 lg:grid-cols-2 pt-9">
        <div className="flex flex-col items-center justify-start col-span-1 pt-5 pb-10">
          <div className="mt-0 md:mt-[2.5rem] w-4/5">
            <div className="flex flex-row items- justify-start w-full mb-[2rem] mt-[1rem] h-30">
              <div className="flex flex-col items-center justify-start ml-3">
                <h2 className="pt-2 pb-2 ml-2 text-4xl font-bold text-left">
                  Adoption post form
                </h2>
                <p className="font-light text-[0.8rem]">
                  please fill the form below to provide your pet with needed
                  introduction.
                </p>
              </div>
            </div>
            <div className="mb-3">
              <AdoptionForm />
            </div>
          </div>
        </div>
        <div
          className="hidden w-full h-full min-h-screen p-0 m-0 bg-fixed bg-right bg-no-repeat bg-contain lg:block lg:col-span-1"
          style={{ backgroundImage: `url(${poster})` }}
        />
      </div>
    </Layout>
  );
};

export default AdoptionPost;
