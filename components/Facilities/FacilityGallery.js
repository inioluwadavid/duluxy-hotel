import React from 'react'
import Images from '../Image'


export default function FacilityGallery() {
  return (
    <div className=' p-12  mt-4  grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Images 
            image='/dinner.png'
            subTitle= 'Dinner'
        />
         <Images 
            image='/bar.png'
            subTitle= 'Bar'
        />
         <Images 
            image='/hall.png'
            subTitle= 'Banquet Hall'
        />
         <Images 
            image='/breakfast.png'
            subTitle= 'Breakfast'
        />
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
  )
}
