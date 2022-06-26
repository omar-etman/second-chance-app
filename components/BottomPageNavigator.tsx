import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AnimalData } from 'types'


type props = {
    animal: string
}

const dogPage = {
    bg:'/assets/images/dog-background.jpg',
    quote:` “Dogs do speak, but only to those who know how to listen.”`,
    by:`-Orhan Pamuk.`
}
const catPage = {
    bg:'/assets/images/cat-background.jpg',
    quote:`“One cat just leads to another.”`,
    by:`-Ernest Hemingway.`
}

const birdPage = {
    bg:'/assets/images/bird-background.jpg',
    quote:`“I’d rather learn from one bird how to sing than teach ten thousand stars how not to dance.”`,
    by:`-E. E. Cummings`
}

const reptilePage = {
    bg:'/assets/images/reptile-background.jpg',
    quote:`“I feel more human when I compare the cuteness of a lizard to a newborn child's sweetness. Both are God's creations filled with precious innocence”`,
    by:`-Munia Khan`
}

const buttons = [
    {key:1, text:'Donate', href:'/donate'},
    {key:2, text:'meet more pets', href:'/rescue'}
]
const BottomPageNavigator:React.FC<props> = ({animal}) => {
    // const [species, setSpecies] = useState({animal})
    const [display, setDisplay] = useState(dogPage)
    const router = useRouter()
    useEffect(() => {
        switch (animal) {
            case 'dog':
              return setDisplay(dogPage)
            case 'cat':
              return setDisplay(catPage)
            case 'bird':
              return setDisplay(birdPage)
            case 'reptile':
                return setDisplay(reptilePage)
            default:
              return setDisplay(display);
          }
      },[]);
  
    return (
    <div
            className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[35rem] lg:h-[40rem] p-0"
            style={{
              backgroundImage: `url('${display.bg}')`,
            }}
          >
            <blockquote className="w-4/5 font-light text-center text-[1rem] text-gray-100 lg:text-5xl">
              {`${display.quote}`}
            </blockquote>
            <span className="text-3xl text-center text-white mt-9 font-light">
              {`${display.by}`}
            </span>
            <ul className='flex flex-col-reverse items-center justify-around lg:flex-row'>
                {buttons.map((button) => (
                    <li key={button.key}>  
                        <button className="p-4 transition-all bg-[#00939C] rounded-2xl duration:100 hover:bg-[#9C3E00] flex justify-center items-center my-8 min-w-[12rem] lg:min-width[10rem] lg:mx-[2rem]">
                        <Link href={button.href}>
                            <a className="text-2xl text-gray-100">
                            {button.text}
                            </a>
                        </Link>
                        </button>
                    </li>
                ))}
            </ul>
          </div>
  )
}

export default BottomPageNavigator