import Head from 'next/head'
import React, {useEffect} from 'react'
import About from '../components/Home/About'
import Booknow from '../components/Home/Booknow'
import CheckAvailiability from '../components/Home/CheckAvailiability'
import Facilities from '../components/Home/Facilities'
import Rooms from '../components/Home/Rooms'
import Testimony from '../components/Home/Testimony'
import TopSection from '../components/Home/TopSection'


export default function Home() {
  useEffect(() => {
    if(typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
    
})
  return (
    <div >
      <Head>
        <title>Duluxy Hotel and Suits</title>
        <meta name="description" content="Duluxy Hotel is a luxury hotel for all and Five class Treatment" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
      </Head>
    
      <TopSection />
      <CheckAvailiability />
      <About />
      <Rooms />
      <Booknow />
      <Facilities />
      <Testimony />
    </div>
  )
}
