import React from 'react'
import { AnimalData } from 'types'
import FadeInTrans2 from './transitions/FadeInTrans2'

const AnimalPageBanner:React.FC<AnimalData> = ({animal}) => {
  return (
    <div 
            className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover min-h-[20rem] p-0"
            style = {{backgroundImage: `url(${animal?.images[0].image})`}}
          >
            <span className='font-extrabold text-center text-white text-7xl lg:text-9xl'>
                <FadeInTrans2>
                  {`Meet ${animal?.name}`} 
                </FadeInTrans2>
              </span>
          </div>
  )
}

export default AnimalPageBanner