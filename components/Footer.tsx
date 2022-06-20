import React from 'react'
import FooterBrand from './FooterBrand'

const Footer:React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-around w-full'>
        <FooterBrand/>
        <div className = "flex flex-row items-center justify-center">
          <span className='text-gray-100 font-light mr-[7rem]'>Follow us : </span>
          <ul className='flex flex-row items-center justify-center'>
              <li>i1</li>
              <li>i2</li>
              <li>i3</li>
              <li>i4</li>
          </ul> 
        </div>
    </div>
  )
}

export default Footer