import React from 'react'

export default function Booknow() {
  return (
    <div className=' booknow p-14'>
        <div className=' grid md:grid-cols-3 '>
            <div className=' md:col-span-2'>
                <h1 className=' text-white font-top-sec font-bold text-3xl '>Looking for the best <br></br>
                    affordable hospitality in town?</h1>
            </div>
            <div className=' md:flex p-4 md:justify-end'>
                <div>
                <button className=' rounded-3xl p-5 py-2  text-orange-600 bg-white '>
                Book Now
                </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
