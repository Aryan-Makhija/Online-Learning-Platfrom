import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    // <div className='p-5 rounded-xl bg-gradient-to-l from-blue-400 via-indigo-500  to-pink-600'>

    //   <h2 className='font-bold  text-2xl text-white  '>
    //  Welcome to EduAI <span  className="text-sm">(Ai powered Online Learning Platform)</span>

    //   </h2>

    //   <p className=' text-white'>Learn  , Create and Explore your favourite courses</p>


    // </div>

<div className="w-full h-24 md:h-96 lg:h-[400px] relative overflow-hidden rounded-lg">
  <Image
    src="/banner.jpeg"
    alt="Banner"
    fill
    className="object-cover object-center w-full h-full"
    priority
  />
</div>
  )
}

export default WelcomeBanner