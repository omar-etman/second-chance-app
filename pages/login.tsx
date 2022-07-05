import { useUser } from "@supabase/supabase-auth-helpers/react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Logo from "../components/generalAppComponents/Brand";
import { useRouter } from "next/router";
import FadeInTrans3 from "components/transitionComponents/FadeInTrans3";
import FadeInTrans2 from "components/transitionComponents/FadeInTrans2";
import FadeInTrans1 from "components/transitionComponents/FadeInTrans1";
import { useCallback, useEffect } from "react";
import { LogInInfo } from "types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { supabase } from "utils/supabase";
// type props = {};

const LogIn: React.FC = () => {
  //to re route back
  // const pendingRoute = useAppSelector(routingState)
  //----------------
  const router = useRouter();
  // const loginWithGoogle = async () => {
  //   const { user, session, error } = await supabase.auth.signIn({
  //     provider: "google",
  //   });
  //   if(data){
  //     router.push('/');
  //   }else{
  //     router.push('/signup')
  //   }

  //   console.log({ user, session, error });
  // };

  // const loginWithFaceBook = async () => {
  //   const { user, session, error } = await supabase.auth.signIn({
  //     provider: "facebook",
  //   });
  //   if(data){
  //     router.push('/');
  //   }else{
  //     router.push('/signup')
  //   }
  //   console.log({ user, session, error });
  // };

  const initialValues = {
    email: "",
    password: "",
  };

  const loginWithEmail = async ({ email, password }: LogInInfo) => {
    await supabase.auth.signIn({
      email,
      password,
    });
    router.back();
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values: LogInInfo) => {
      console.log(values);
      await loginWithEmail(values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("*Required"),
      password: Yup.string().required("*Required"),
    }),
  });

  const LogInFormFeilds = [
    {
      key: 0,
      name: "email",
      formValue: formik.values.email,
      label: `Email`,
      type: "string",
      placeholder: `johndoe@example.come`,
    },
    {
      key: 1,
      name: "password",
      formValue: formik.values.password,
      label: `Password`,
      type: "password",
      placeholder: `xxxxxxxxxxxxxxxxxxx`,
    },
  ];

  const logInFormMapper = () => {
    return LogInFormFeilds.map((f) => (
      <div className="mb-6" key={f.key}>
        <label className="block mb-1 text-sm font-light text-gray-100 ">
          {f.label}
        </label>
        <input
          type={f.type}
          id={f.name}
          name={f.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-900"
          placeholder={f.placeholder}
          onBlur={formik.handleBlur}
          value={f.formValue}
          onChange={formik.handleChange}
          required
        />
      </div>
    ));
  };

  //formik

  // const getFullUser = useCallback( async () => {
  //   if (user && !data || data === null || undefined) {
  //     router.push('/signup');
  //   } else if (user && data) {
  //     router.push('/');
  //   } else if (!user) {
  //     return
  //   }
  // }, [user, data, router])

  // useEffect(() => {
  // if(!user){
  //   router.push('/signup')
  // } else {
  //   return
  // }
  // }, [router, user]);

  // console.log(data)

  // console.log({ user });

  // if(!user){
  //   router.push('/signup')
  // } else {
  //   return
  // }

  return (
    <div className="grid min-h-screen text-gray-100 bg-teal-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center justify-center h-screen lg:col-span-1 md:col-span-1">
        <div className="px-4 mb-[2rem] w-full">
          {/* into block */}
          <div className="flex flex-col items-center justify-center mb-[2.5rem]">
            <div className="relative mb-2 h-25">
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
            <div className="text-center font-thin text-[2.5rem]">
              <FadeInTrans2>
                <span className="border-b">Second Chance</span>
              </FadeInTrans2>
            </div>
            <div className="font-light text-center text-[1.2rem] leading-0">
              <FadeInTrans3>
                <span>we rescue them ... they save us.</span>
              </FadeInTrans3>
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-4">
                <div>
                  <h2 className="mt-6 text-3xl font-light text-gray-100 text-Left">
                    Login to your account
                  </h2>
                  <p className="mt-2 text-sm text-left text-gray-300">
                    Or{" "}
                    <Link href="/signup">
                      <a className="font-medium text-teal-600 transition-all duration-200 hover:text-[#9C3E00]">
                        sign up for a new one
                      </a>
                    </Link>
                  </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    {logInFormMapper()}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-white bg-[#502000] focus:outline-none  font-medium rounded-lg text-sm  px-5 py-3 text-center self-center w-full mb-5 transition-all duration-200 hover:bg-[#9C3E00]"
                      onClick={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
  );
};

export default LogIn;
