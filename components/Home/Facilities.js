import React from 'react'
import FacilityIcons from '../FacilityIcons'
import Images from '../Image'

export default function Facilities() {
  return (
    <div className=' p-8 mt-8'>
        <h5 className=' text-center  font-top-sec text-blue-500 '> Facilities</h5>
        <h1 className=' text-center p-3 font-bold text-black font-top-sec text-2xl  mb-4'> We have the best facilities in town</h1>

        <div className=' grid grid-cols-1 mx-auto md:grid-cols-4 md:gap-4 mb-5'>
            <Images 
                image='/spa.png'
            subTitle= 'Spa'
            />
            <Images 
                image='/gym.png'
            subTitle= 'Gym'
            />
            <Images 
                image='/rest.png'
            subTitle= 'Restaurant'
            />
            <Images 
                image='/swimming.png'
            subTitle= 'Swimming pool'
            />
        </div>
       <FacilityIcons />

    </div>
  )
}
