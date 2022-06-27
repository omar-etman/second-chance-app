import { Dispatch, Fragment, SetStateAction, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import prisma from "prismaCient";
import useSWR from "swr";
import axios from "axios";
type props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AnimalRescueDialog: React.FC<props> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const user = useUser();
  const userId = user.user?.id;
  const animalId = router.query.animalId;

  const rescue = async () => {
    setOpen(false)
    const res = axios.post(`/api/rescue`, {animalId, userId});
    const data = await res;
    console.log('data', data);
  }

  const routeToLogin = () => {
    setOpen(false);
    router.push("/login");
  };

  const exitDialog = () => {
    setOpen(false);
    console.log(user)
    console.log(animalId);
  };

  const userCheck = () => {
    if (!user || user === null) {
      return (
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-[#10ABB4] border border-transparent rounded-md shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 sm:col-start-2 sm:text-sm"
          onClick={routeToLogin}
        >
          Login
        </button>
      );
    }
    return (
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-[#10ABB4] border border-transparent rounded-md shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 sm:col-start-2 sm:text-sm"
        onClick={rescue}
      >
        Yes
      </button>
    );
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75 z-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-90">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="relative flex items-center self-center justify-center w-full">
                    <Image
                      src="/assets/images/logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {user
                        ? `Looks like the start of a new friendship!`
                        : `you need to log in to your account first`}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {user
                          ? `you picked a hell of friend today, on proceeding we will contact you for further details, till then that friend would be booked for you. Shall we do so?`
                          : `this a hell of a friend to have and we're sure luck plays for both sides her , but first we need you logged in or signed up if you don't have an account, we'd be so happy to have you on board.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  {userCheck()}
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={exitDialog}
                    ref={cancelButtonRef}
                  >
                    Will consider
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AnimalRescueDialog;