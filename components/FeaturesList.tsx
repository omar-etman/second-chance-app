import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { features } from 'utils/featuresDisplay'

const FeaturesList:React.FC = () => {
    return (
      <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="relative mt-8">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="inline-flex mx-4 space-x-8 overflow-hidden sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {features.map((feature) => (
                <li key={feature.key} className="inline-flex flex-col w-64 text-center lg:w-auto">
                  <div className="relative group">
                    <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-w-1 aspect-h-1">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        layout='fill'
                        objectFit='cover'
                        className="object-cover object-center w-full h-full group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-100">
                      <a href={feature.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {feature.name}
                      </a>
                    </h3>
                      <p className="text-sm font-light text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>


      )
}

export default FeaturesList


