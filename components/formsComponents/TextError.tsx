import React from 'react'

type props = {
    children: React.ReactNode;
};
const TextError:React.FC<props> = ({children}) => {
  return (
    <div className='flex flex-row items-center justify-start'>
        <span className='text-gray-200 mr-1'>Error:</span>
        {children}
    </div> 
  )
}

export default TextError
