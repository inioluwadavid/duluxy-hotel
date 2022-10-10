import Link from 'next/link'
import React from 'react'
import Images from '../Image'

export default function Rooms() {
  return (
    <div className=' mt-4 p-8'>
        <h3 className=' text-center text-green-600 font-top-sec wow animate__animated animate__fadeInLeft'>Our Rooms & RATES</h3>
        <h1 className=' text-center text-2xl font-bold text-black wow animate__animated animate__fadeInLeft'>Our rooms are of good standard</h1>

        <div className=' mt-10 grid md:grid-cols-4 md:gap-4 '>
            <Images 
                image='/singleR.png'
                title='Single Room'
            />
            <Images 
                image='/doubleR.png'
                title='Double Room'
            />
            <Images 
                image='/exeR.png'
                title='Executive Room'
            />
            <Images 
                image='/duplex.png'
                title='Duplex Room'
            />
        </div>

        <div className=' flex justify-end mt-6 mb-6'>
        <Link href='/rooms'>
        <button className=' p-3 bg-orange-100 text-orange-500'>
            View more
            </button>
        </Link>
           
        </div>
    </div>
  )
}
