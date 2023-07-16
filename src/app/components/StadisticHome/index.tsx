import { formatNumber } from '@/app/helpers/functions'
import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", '500', '700', '900'],
});

export default function StadisticHome({img, after, number, title}: any) {
  return (
    <div className={`m-[15px] text-center stadistic-item ${roboto.className} stadistic`}>
        <Image 
            src={img}
            alt='Stadistic'
            width={100}
            height={100}
            className='inline-block'
        />
        <p className='text-2xl'>{formatNumber(number)} {after}</p>
        <span className='block w-[60%] m-auto'>{title}</span>
    </div>
  )
}
