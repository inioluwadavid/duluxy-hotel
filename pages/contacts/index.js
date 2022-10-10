//author David Ajibade -- github inioluwadavid
import Head from 'next/head'
import React, {useEffect} from 'react'
import ContactForm from '../../components/Contact/ContactForm'
import Map from '../../components/Contact/Map'
import TopContent from '../../components/Contact/TopContent'

export default function Contactus() {
  useEffect(() => {
    if(typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
    
})
  return (
    <div>
       <Head>
        <title>Contact us</title>
        <meta name="description" content="Duluxy Hotel is a luxury hotel and has Five star Facilities" />
        
        <link rel="icon" href="/favicon.ico" />
        <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
        </Head>
        <TopContent />
        <ContactForm />
       
        
        
    </div>
  )
}
