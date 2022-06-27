import React from 'react'
import FeaturesList from './FeaturesList'

const FeaturesDisplay:React.FC = () => {
  return (
    <article>
        <section
            className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[40rem] p-0"
            style={{ backgroundImage: `url('/assets/images/background-4.jpg')` }}
        >
            <span className="font-extrabold text-center text-gray-100 text-7xl lg:text-9xl opacity-[0.8] w-4/5">{`WE'VE GOT YOUR BACK`}</span>
        </section>
        <div className="flex flex-col items-center justify-center py-8 m-0 bg-[#00939C] w-full min-h-[35rem]">
            <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
            Since we aim to fill the world with rescuers we offer the following
            features
            </span>
            <FeaturesList />
        </div>
    </article>
        
  )
}

export default FeaturesDisplay