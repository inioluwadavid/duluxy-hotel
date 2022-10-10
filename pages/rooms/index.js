import Head from 'next/head'
import React, {useEffect} from 'react'
import CardSection from '../../components/Rooms/CardSection'
import Topsection from '../../components/Rooms/Topsection'

export default function Rooms() {
  useEffect(() => {
    if(typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
    
})
  return (
    <div>
    <Head >
    <title>Duluxy Hotel and Suits</title>
        <meta name="description" content="Duluxy Hotel is a luxury hotel for all and rooms" />
        <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
    </Head>
        <Topsection />
        <CardSection />
    </div>
  )
}
