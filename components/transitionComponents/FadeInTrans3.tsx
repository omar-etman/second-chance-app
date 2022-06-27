import { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'

type props = {
    children: React.ReactNode;
};
  
const FadeInTrans3:React.FC<props> = ({children}) => {
  
  const [isShowing, setIsShowing] =  useState(false)

  useEffect(() => {
setIsShowing(true)
  },[])

  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-opacity duration-[4000ms]"
      enterFrom="opacity-0"
      enterTo="opacity-[0.8]"
    >
        {children}
    </Transition>

  )
}

export default FadeInTrans3