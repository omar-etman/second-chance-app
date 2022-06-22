import { Tab } from '@headlessui/react'
import React, { ReactElement } from 'react'
import Image from 'next/image'
import { classNames } from 'utils/classNames'
import { Image as AnimPic } from '@prisma/client';
import { AnimalData, AnimPicsData } from 'types';
const ImageSelector:React.FC<AnimPicsData> = ({images, name}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
            {/* selected pic */}
            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {images?.map((image:AnimPic) => (
                  <Tab
                    key={image.id}
                    className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }:{selected:boolean}):ReactElement => (
                      <>
                        <span className="sr-only">{name || 'name'}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <Image src={image.image || '/assets/images/logo.jpg'} alt="" className="object-center w-full h-full " layout='fill' objectFit='cover' />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-[#9C3E00]' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            {/* pic selector */}
            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {images?.map((image:AnimPic) => (
                <Tab.Panel key={image.id}>
                  <Image
                    src={image.image|| '/assets/images/logo.jpg'}
                    alt={name ||'pics are yet to be provided'}
                    layout='fill'
                    objectFit='cover'
                    className="object-center w-full h-full sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
  )
}

export default ImageSelector