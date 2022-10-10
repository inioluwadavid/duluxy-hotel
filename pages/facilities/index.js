import Head from 'next/head'
import React, {useEffect} from 'react'
import FacilityGallery from '../../components/Facilities/FacilityGallery'
import Topsection from '../../components/Facilities/Topsection'
import FacilityIcons from '../../components/FacilityIcons'
export default function Facilities() {
  return (
    

    <div>

        <Head>
        <title>Duluxy Hotel and Suits Facility</title>
        <meta name="description" content="Duluxy Hotel is a luxury hotel and has Five star Facilities" />
        <link rel="icon" href="/fnkm,. bjl;avicon.ico" /> 
        <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
        </Head> 
        <Topsection />
        <FacilityGallery />
        <FacilityIcons />
    </div>
  )
}
