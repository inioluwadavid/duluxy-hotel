import Image from 'next/image'
import React from 'react'

export default function Images({image, title, subTitle}) {
  return (
    <div className='relative wow animate__animated animate__fadeIn animate__slow'>
        <div >
        <Image
         src={image}
         alt= ' Image'
         width='351'
         height='442'
         className=' rounded-xl  bg-li '
         />
        </div>
       
         <h3 className=' text-center text-black mt-3 mb-3 font-bold'>{title}</h3>
         <div className=' absolute   top-48 left-1/2'>
         <h4 className='  relative -left-1/2 font-bold text-white '>{subTitle}</h4>
         </div>
         
    </div>
  )
}
