import React from 'react'
import Image from 'next/image';

const FooterBrand: React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='flex flex-row items-center justify-center'>
        <div className='relative w-auto h-auto '>
          <Image
            src='/assets/images/logo-white.png'
            alt='brand'
            objectFit='contain'
            width={20}
            height={20}
          />
        </div>
        <span className='my-2 ml-1 font-light text-gray-100 text-1xl'>SECOND CHANCE</span>
      </div>
      <div className='flex flex-row items-center justify-center ml-3 font-light'>
        <span className='text-gray-100 '>&#169;</span>
        <span className='text-gray-100'>2022 - All Rights Reserved.</span>
      </div>
    </div>
         
  )
}

export default FooterBrand