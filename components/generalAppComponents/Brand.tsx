import React from 'react'
import Image from 'next/image';

const Brand: React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='relative w-auto h-auto'>
        <Image
          src='/assets/images/logo-white.png'
          alt='brand'
          objectFit='contain'
          width={50}
          height={40}
        />
      </div>
      <span className='ml-2 text-gray-200 transition-all duration-300 text-1xl hover:text-white'>SECOND CHANCE</span>
    </div>     
  )
}

export default Brand