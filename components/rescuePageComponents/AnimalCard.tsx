import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AnimalData} from '../../types'

const AnimalCard:React.FC<AnimalData> = ({animal}) => {
  return (
    <>
        <Link href={`/animal/${animal?.id}`}>
                <a className="text-sm group">
                  <div className="w-full overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                    
                    <Image
                      src={animal?.images[0].image || '/assets/images/logo.jpg' }
                      alt={animal?.name || 'name'}
                      layout='fill'
                      objectFit='cover'
                      className="w-full h-full"
                    />
                  </div>
                  
                  <h3 className="mt-4 text-2xl font-medium text-gray-900">{animal?.name}</h3>
                  {/* age is yet to be displayed to the right side of the name */}
                  <p className="italic text-gray-500">{animal?.breed}</p>
                  <p className="italic text-gray-500">{animal?.traits}</p>
                </a>
              </Link>
    </>
  )
}

export default AnimalCard