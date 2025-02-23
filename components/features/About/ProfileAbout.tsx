import Image from 'next/image'
import React from 'react'

export const ProfileAbout = () => {
  return (
    <div className='backdrop-blur-xl relative border-custom-shape flex justify-center w-[300px] my-10 ' >
      <div className='z-10   rounded-b-full   overflow-hidden' >
        <Image
          src={"/img/user.png"}
          alt='user'
          width={250}
          height={250}
          className=' px-5 grayscale   '
        />
      </div>

      <div className='absolute inset-0 flex   bitems-center justify-center'>
        {/* Contenedor del círculo exterior */}
        <div className='rounded-full border border-foreground w-[300px] h-[300px] flex items-center justify-center'>
          {/* Círculo gradiente interior */}
          <div className='rounded-full bg-amber-300 w-[70%] h-[70%] aspect-square '>
          </div>
        </div>
      </div>
    </div>
  )
}

