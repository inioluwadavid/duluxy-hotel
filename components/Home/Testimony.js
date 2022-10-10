import Image from 'next/image'
import React from 'react'

export default function Testimony() {
  return (
    <div className=' mt-6 p-8 '>
        <h5 className=' text-purple-600 text-center mb-3'>Testimonies</h5>
        <h2 className=' text-center text-2xl text-black mb-6 font-top-sec font-bold '>What our customers say about us</h2>
        <div className='relative'>
        <div className=' mt-5 mb-6 flex justify-center '>
            <div className=' relative'>
                <div className=' p-8 shadow-xl shadow-orange-200 rounded-lg relative'>
                    <h4 className=' text-justify font-top-sec text-black mb-8'>
                    This has been the best hotel I have ever been to. Their <br></br>
                        hospitality was top notch, their services was the best. <br></br> Do
                        patronize them  
                    </h4>
                    <h1 className=' text-center text-orange-500 font-bold mb-3'> Adefiwa George</h1>
                    <h2 className=' text-center text-black mt-3'>CEO Fiwa Groups</h2>
                    <div className=' absolute -bottom-12 right-44'>
                    <svg width="76" height="76" className='  text-white' viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.86616 7.5C5.48126 8.16667 4.51901 8.16667 4.13411 7.5L0.670011 1.5C0.28511 0.833334 0.766236 0 1.53604 0H8.46424C9.23404 0 9.71516 0.833333 9.33026 1.5L5.86616 7.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className=' mt-24 flex justify-center'>
                <Image 
                    src='/testi.png'
                    width='156'
                    height= '156'
                    alt='image'
                />
                </div>
            </div>
        </div>
        <div className=' hidden md:block absolute top-0  md:left-56'>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" className=" text-gray-300 bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>
                </div>
                <div className=' hidden md:block absolute bottom-0 right-0 md:right-56'>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" className=" rotate-180 text-gray-300 bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>
                </div>
        </div>
       
    </div>
  )
}
