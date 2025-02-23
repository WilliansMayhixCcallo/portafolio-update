"use client"
import Image from 'next/image'
import React from 'react'

export const Skill = () => {
  const images = [
    '/img/materialui.png',
    '/img/node.jpeg',
    '/img/nextjs.jpg',
    '/img/react.png',
    '/img/javascript.png',
    '/img/ts.png',
    '/img/html.png',
    '/img/css.jpg',
    '/img/shadcn.jpg',
    '/img/postgres.png',
    '/img/springboor.jpeg',
    '/img/tailwind.png',
    '/img/java.jpg',
    '/img/github.jpg',

  ];
  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-4 xl:columns-5 2xl:columns-7   mx-auto space-y-3 m-0 ">
      {images.map((img, index) => (
        <div key={index} className="relative group overflow-hidden   rounded-lg 
          max-h-full max-w-full sm:max-w-[180px]">
          <Image
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={200}
            height={250}
            className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 break-inside-avoid rounded-2xl "
          />
          <p className='mt-2 ml-2'>
            <span className='text-sm font-semibold text-neutral-600 block'>{img}</span>
            <span className='text-sm  text-neutral-500'>loberia</span>
          </p>
        </div>
      ))}
    </div>
  )
}

