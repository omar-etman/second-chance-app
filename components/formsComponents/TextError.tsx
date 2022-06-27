import React from 'react'

type props = {
    children: React.ReactNode;
};
const TextError:React.FC<props> = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-start'>
        <span className='text-orange-500'>Error</span>
        {children}
    </div> 
  )
}

export default TextError
