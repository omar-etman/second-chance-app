import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Animal } from '@prisma/client';

type props = {
    animal : Animal
}
const AnimalCard:React.FC<props> = ({animal}) => {
  return (
    <>
        <Link href={`/animal/${animal.id}`}>
                <a className="group text-sm">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={animal.images[0].image}
                      alt={animal.name}
                      layout='fill'
                      objectFit='cover'
                      className="w-full h-full"
                    />
                  </div>
                  
                  <h3 className="mt-4 font-medium text-gray-900 text-2xl">{animal.name}</h3>
                  {/* age is yet to be displayed to the right side of the name */}
                  <p className="text-gray-500 italic">{animal.breed}</p>
                  <p className="text-gray-500 italic">{animal.traits}</p>
                </a>
              </Link>
    </>
  )
}

export default AnimalCard