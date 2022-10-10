import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className='mt-16 p-3'>
        <div>
            <h2 className=' text-center text-orange-600 font-top-sec mb-2 wow animate__animated animate__fadeInLeft'>ABOUT US</h2>
            <h1 className=' text-center text-black font-top-sec mb-4 font-bold text-3xl wow animate__animated animate__fadeInLeft'>All you need to know about us</h1>
            <div className=' mt-3 p-4 grid md:grid-cols-2 gap-4'>
                <div className=' mx-auto'>
                    <Image 
                        src='/hospitality.png'
                        width='739'
                        height= '644'
                        alt='Hospitality'
                        className=' wow animate__animated animate__fadeIn bg-li rounded-lg'
                    />
                </div>
                <div>
                    <div className=' grid h-full text-center place-items-center  wow animate__animated animate__fadeIn animate__fadeInUp'>
                    <div className=' p-4'>
                    <h1 className=' text-start md:text-justify font-top-sec text-3xl font-bold  text-black mb-6'>We provide the best hospitality <br></br> ever in town</h1>
                    <h5 className=' text-justify text-black '>Opened in December 2022, Duluxe Hotel is located in Sankt Johann in Tirol, 400 m from the cable car. It offers an outdoor activities centre, an art gallery, the Sky Lounge with panoramic mountain views, a sauna, and free WiFi.
                        <br></br> With a sophisticated network of experienced professionals in the hospitality industry, driven by a core team of competent and tested consultants who are armed with  native understanding of hospitality management and related disciplines in Africa. This minefield of human resources ensures a seamless provision of world class hospitality management solutions to clients across Africa and beyond, including those intending to invest in the burgeoning African hospitality industry. 
                        <br></br> Our core mission is to provide competitively world-class Hospitality, Leisure, Recreation, home like evenvironment and Tourism Management & Consultancy Services.
                        </h5>
                        <Link href='/rooms'>
                        <button className=' flex justify-start px-4 p-3 rounded-xl text-white mt-6 bg-orange-600'>
                        Learn more
                        </button>
                        </Link>
                        </div>

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
