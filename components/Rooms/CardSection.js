import React from 'react'
import CardComponent from './CardComponent'

export default function CardSection() {
  return (
    <div className=' p-12 lg:p-28 grid  md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <CardComponent
            img='/single01.png'
            title='Single Room'
            price='200'
            subTitle= 'Spa, wifi, car parking, breakfast in bed '
            rating= '4.6'
        />
          <CardComponent
            img='/double01.png'
            title='Double room'
            price='250'
            subTitle= 'Spa, wifi, car parking,breakfast in bed, air conditioner'
            rating= '4.9'
        />
          <CardComponent
            img='/exe01.png'
            title='Executive room'
            price='300'
            subTitle= 'Spa, wifi, car parking, breakfast in bed, air conditioner, gym'
            rating= '4.8'
        />
          <CardComponent
            img='/dup01.png'
            title='Duplex room'
            price='400'
            subTitle= 'Spa, wifi, car parking, breakfast in bed, air conditioner, gym'
            rating= '4.7'
        />
         <CardComponent
            img='/single1.png'
            title='Single Room'
            price='200'
            subTitle= 'Spa, wifi, car parking, breakfast in bed     '
            rating= '4.6'
        />
          <CardComponent
            img='/double1.png'
            title='Double room'
            price='250'
            subTitle= 'Spa, wifi, car parking, breakfast in bed, air conditioner'
            rating= '4.9'
        />
          <CardComponent
            img='/executive1.png'
            title='Executive room'
            price='300'
            subTitle= 'Spa, wifi, car parking, breakfast in bed, air conditioner, gym'
            rating= '5.0'
        />
          <CardComponent
            img='/duplex1.png'
            title='Duplex room'
            price='400'
            subTitle= 'Spa, wifi, car parking, breakfast in bed, air conditioner, gym'
            rating= '4.8'
        />
    </div>
  )
}
