import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import useSWR from 'swr';
import { Animal } from '@prisma/client';
import { CircularProgress } from '@mui/material';
import AnimalCard from './AnimalCard'

const filters = [
  {key:0, name:'all'},
  {key:1, name: 'Dogs'},
  {key:2, name: 'Cats'},
  {key:3, name: 'Birds'},
  {key:4, name: 'Reptiles'}
]
const fetchAnimals = (url:string) => axios.get(url).then((res) => res.data)

const AnimalsList:React.FC = () => {
  const { data, error } = useSWR(`/api/animals`, fetchAnimals);
  //need a useState hook to handle the filtering
  const [filter, setFilter] = useState('All')

  const filterBy = (name:string) => {
    setFilter(name)
  }

  if(!data) {

    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <CircularProgress color="inherit" className='w-[12rem]'/>
      </div> 
    )  
  }
  return (
    <div className="w-full pb-8 bg-gray-100">
      {/* to be turned to a dropdown component */}
      {/* <ul className='flex flex-col justify-center items-center lg:flex-row lg:justify-around w-full bg-[#502000]'>
        {filters.map((filter) => (
          <li key={filter.key} className=' w-4/5 lg:w-[8rem]'>
            <button 
              className='self-center w-full p-5 mb-4 text-3xl font-light text-gray-300 transition-all duration-600 hover:text-white'
              // onClick={setFilter(filter.name)}
            >
              <span className='text-center'>{filter.name}</span>
            </button>  
          </li>
        ))}
      </ul> */}
      <div className="px-4 py-4 mx-auto overflow-hidden max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {data.map((animal:Animal) => (
            <li key={animal.id}>
              <AnimalCard
                animal={animal}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AnimalsList



