import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
    {
      id: 1,
      name: 'Basic Tee 8-Pack',
      href: '#',
      price: '$256',
      description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
      options: '8 colors',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32',
      description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
      options: 'Black',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
      imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
  ]

  //useSWR to fetch the animals who are not rescued
const AnimalsList:React.FC = () => {
    return (
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
                >
                  <div className="relative bg-gray-200 aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-center w-full h-full sm:w-full sm:h-full"
                      objectFit='cover'
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="flex flex-col justify-end flex-1">
                      <p className="text-sm italic text-gray-500">{product.options}</p>
                      <p className="text-base font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}

export default AnimalsList
