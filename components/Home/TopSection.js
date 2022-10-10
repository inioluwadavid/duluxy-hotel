import Image from 'next/image'
import React from 'react'

export default function TopSection() {
  return (
    <div className='bg'>
        <div className='grid h-full text-center place-items-center '>
            <div className=' grid  md:grid-cols-3 md:gap-3'>
                <div className=' md:col-span-2 md:justify-center mt-6 md:mt-0 p-8 md:p-36'>
                    <h4 className=' mb-4 text-white font-top-sec text-left '>WELCOME TO DELUXE</h4>
                    <h1 className=' text-white text-4xl md:text-7xl text-start mb-4 font-top-sec'>Only here you will feel at home </h1>
                    <h6 className=' text-white font-top-sec text-center'>We provide the best hospitality you can ever imagine and have not yet experienced before in town. We are the best at what we do</h6>
                </div>
                <div className=' md:grid-cols-1 pt-3 md:pt-40'>
                    <Image 
                        src='/PlayB.png'
                        width='246'
                        height='246'
                        alt='Play'
                        className=' md:flex md:justify-center animate-pulse'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
