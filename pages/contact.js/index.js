import Head from 'next/head'
import React from 'react'
import ContactForm from '../../components/Contact/ContactForm'
import TopContent from '../../components/Contact/TopContent'
import SimpleMap from '../../components/contact/ContactLocation'
export default function Contactus() {
  return (
    <div>
       <Head>
        <title>Contact us</title>
        <meta name="description" content="Duluxy Hotel is a luxury hotel and has Five star Facilities" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopContent />
        <ContactForm />
        
    </div>
  )
}
