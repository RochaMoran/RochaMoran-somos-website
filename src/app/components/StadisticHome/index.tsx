import Image from 'next/image'
import React from 'react'

export default function StadisticHome({img, after, number, title}: any) {
  return (
    <div className='m-[15px] text-center stadistic-item'>
        <Image 
            src={img}
            alt='Stadistic'
            width={100}
            height={100}
            className='inline-block'
        />
        <p className='text-2xl font-bold'>{number} {after}</p>
        <span className='block w-[60%] m-auto'>{title}</span>
    </div>
  )
}
