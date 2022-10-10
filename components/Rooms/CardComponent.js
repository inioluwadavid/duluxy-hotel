import Image from 'next/image'
import React from 'react'

export default function CardComponent({ img, title, price, subTitle, rating}) {
  return (
    <div className=' grid rounded-xl mb- shadow-lg grid-flow-row relative'>
        <Image 
            src={img}
         width= '351'
         height= '300'
         alt='image'
         className=' rounded-t-xl relate'
        />
        <div className=' px-3 mt-4 flex justify-between'>
            <h4 className=' text-black text-center font-top-sec'>{title}</h4>
            <h4 className=' text-orange-600 text-center font-top-sec'>${price}</h4>

        </div>
        <div className=' px-3 mt-4'>
        <h4 className=' text-black p-2 opacity-60 text-start font-top-sec'>{subTitle} <br></br></h4>
        </div>
        <div className=' mt-2 mb-5 flex justify-center'>
            <button className=' rounded-xl text-sm p-1 px-4 bg-orange-600 text-white text-center'>
            Book Now
            </button>
        </div>
        <div className=' absolute top-2 left-4 '>
        <button className=' rounded-xl p-1 px-3 text-xs bg-orange-600 text-white text-center'>
            {rating}
            </button> 
        </div>
    </div>
  )
}
