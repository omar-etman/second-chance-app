import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { classNames } from 'utils/classNames'
import { AnimalData } from 'types'
import ImageSelector from './ImageSelector'
import Loader from './Loader'
import { dateFormat, ageDisplay, getMonthDifference } from 'utils/dateFormats'
import { date } from 'yup'
import { Animal } from '@prisma/client'
import AnimalDetails from './AnimalDetails'
import { useState } from 'react'
import AnimalRescueDialog from './AnimalRescueDialog'



type props = {
    
}


const AnimalInfo:React.FC<AnimalData> = ({animal}) => {

  // const age = (animal: { dateOfBirth: Date | number | null }) => {
  //   if(!animal) {
  //     console.log('date error')
  //     return 
  //   }
  //   const today = dateFormat(Date.now(), 'MM-dd-yyyy') 
  //   const date1 = dateFormat(animal!.dateOfBirth!, 'MM-dd-yyyy') 
  //   const date2 = today
  //   return getMonthDifference(date1, date2)
  // }
  const [open, setOpen] = useState(false)
  const openDialog = () => {
    setOpen(true)
  }
  const traits = animal!.traits!
  const requirements = animal!.requirements!
  
  const splitter = (str:string | null) => {
    if(!str){
      return []
    }
    return str.split(',')
  }

  const traitsArray = splitter(animal!.traits!)
  const requirementsArray = splitter(animal!.requirements!)
  
  
  const details = () => {
    return [
      {
        key:1,
        name:'Traits',
        items:traitsArray
      },
      {
        key:2,
        name:'Requirements',
        items:requirementsArray
      },
      
    ]
  }

  if (!animal) {
    return <Loader/>
  }

  return (

      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <AnimalRescueDialog
          open={open}
          setOpen={setOpen}
        />
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ImageSelector
             images={animal!.images}
             name={animal?.name}
          />
          {/* animal info */}
          <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-100">{animal.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">{`animal's`} breed</h2>
              <p className="text-3xl text-gray-100">{animal.breed}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Story</h3>

              <div
                className="space-y-6 text-base font-light text-gray-100"
                dangerouslySetInnerHTML={{ __html: animal.story || `${animal.name}'s story is yet to be provided` }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <AnimalDetails
                details={details()}
              />
            </section>
            
            <div className="flex mt-10 sm:flex-col1">
              <button
                onClick={openDialog}
                className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-[#502000] transition-all duration-300 border border-transparent rounded-md hover:bg-[#9C3E00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indig`o-500 sm:w-full"
              >
                {`Rescue ${animal.name} ?`}
              </button>
            </div>
          </div>
        </div>
      </div>

  )
}

export default AnimalInfo