import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='mt-16 p-3'>
        <div>
            <h2 className=' text-center text-orange-600 font-top-sec mb-2'>ABOUT US</h2>
            <h1 className=' text-center text-black font-top-sec mb-4 font-bold text-3xl'>All you need to know about us</h1>
            <div className=' mt-3 p-4 grid md:grid-cols-2 gap-4'>
                <div className=' mx-auto'>
                    <Image 
                        src='/hospitality.png'
                        width='739'
                        height= '644'
                        alt='Hospitality'
                        className=' bg-li rounded-lg'
                    />
                </div>
                <div>
                    <div className=' grid h-full text-center place-items-center '>
                    <div className=' p-4'>
                    <h1 className=' text-justify font-top-sec text-3xl font-bold  text-black mb-6'>We provide the best hospitality <br></br> ever in town</h1>
                    <h5 className=' text-justify text-black '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed ultrices quam sagittis adipiscing nisl mattis. Eget feugiat porta arcu ut lacus. Sed dui penatibus amet arcu viverra donec laoreet in in. Eros rhoncus gravida nunc condimentum quis. Ut arcu, sagittis vitae pharetra elit morbi adipiscing lobortis eget.
                        </h5>
                        <button className=' flex justify-start px-4 p-3 rounded-xl text-white mt-6 bg-orange-600'>
                        Learn more
                        </button>
                        </div>

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
