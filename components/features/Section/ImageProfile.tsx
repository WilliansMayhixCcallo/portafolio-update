import Image from 'next/image'
import React from 'react'

export const ImageProfile = () => {
  return (
    <div className='backdrop-blur-xl  relative   border-custom-shape flex justify-center w-[300px] my-10'>
      <Image src={"/img/user.png"} alt='user' width={300} height={300} className='z-10 px-5 grayscale  fade-bottom' />
      <div className='absolute bottom-0 rounded-[30px] bg-gradient-to-r from-green-500 to-blue-500 h-[45%] w-full z-0'>

      </div>
    </div>

  )
}

