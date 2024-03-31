import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='flex justify-center w-full h-full border-r-2 border-solid md:w-1/2 border-dark dark:border-light'> 
            <Image src={profileCharacter} alt="Mikanseiboys" 
             className='object-cover object-center w-full h-full rounded-3xl -z-10'
            priority
            sizes='100vw'
            />
                     {/* <Image src={profileCharacter} alt="Mikanseiboys" 
            className='object-contain object-center w-4/5 h-full rounded xs:w-3/4 md:w-full'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            /> */}
        </div>

    

        <div className='flex flex-col items-start justify-center w-full px-5 pb-10 text-left md:w-1/2 xs:p-10 lg:px-16'>
            <h3 className='text-4xl font-bold text-center capitalize xs:text-5xl sxl:text-6xl lg:text-left'>
            八王子発の4ピース青春パンクバンド
            </h3>
            <p className='mt-4 text-base font-medium capitalize'>
            Vo.田中優一<br/>
            Gt.鎌田浩太朗<br/>
            Dr.福新悠太<br/>
            Ba.小森春季(support)<br/>

            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection