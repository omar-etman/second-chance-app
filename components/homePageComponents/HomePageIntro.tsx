import FadeInTrans1 from 'components/transitionComponents/FadeInTrans1'
import Image from 'next/image'
import FadeInTrans2 from 'components/transitionComponents/FadeInTrans2'
import FadeInTrans3 from 'components/transitionComponents/FadeInTrans3'
const HomePageIntro:React.FC = () => {
  return (
    <article>   
      <section
          className="flex flex-col items-center justify-end w-full min-h-[55rem] md:min-h-screen m-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/images/background-1.jpg')` }}
        >
          <FadeInTrans1>
            <div className="relative m-0 h-30 opacity-[0.7]">
              <Image
                src="/assets/images/logo-white.png"
                alt="logo"
                width={250}
                height={250}
                objectFit="contain"
              />
            </div>
          </FadeInTrans1>
            <div className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] mt-1 text-white">
          <FadeInTrans2>
            <h1 className='border-b'>SECOND CHANCE</h1>
          </FadeInTrans2>
            </div>
            <div className="text-[1.5rem] font-light text-white mt-0 mb-[9.5rem] leading-0 md:mb-[14.5rem] lg:mb-[5.5rem]">
          <FadeInTrans3>
              <span>we rescue them ... they save us.</span>
          </FadeInTrans3>
            </div>  
        </section>
        <section className="min-h-[30rem] bg-[#00939C] py-9 w-full flex flex-col justify-center items-center">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          Your friendly neighbourhood animal lovers
        </span>
        <p className="w-4/5 text-2xl font-light text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          consectetur at nemo saepe! Ullam reprehenderit, voluptatibus nisi quae
          voluptas quasi nihil architecto qui rem voluptates dolorum quas neque
          animi, iusto maxime iure itaque ab tempora eius quia nesciunt porro
          repellendus!
        </p>
      </section>
    </article>
  )
}

export default HomePageIntro