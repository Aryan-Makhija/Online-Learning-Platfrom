import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (

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