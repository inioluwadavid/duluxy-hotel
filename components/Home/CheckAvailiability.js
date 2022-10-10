import React from 'react'

export default function CheckAvailiability() {
  return (
    <div className=' xl:mr-2 relative md:w-4/5 mx-auto'>
    <div className='  md:absolute md:-top-4 bg-white'>
        <form>
            <div className=' grid p-4 md:p-0 grid-cols-1 md:grid-cols-5 gap-4 mb-4'>
                <div></div>
                <div className=' flex justify-center'>
                <div>
                    <label className=' block text-gray-400'>Arrival Date</label>
                    <select>
                        <option> September, 19, 2020</option>
                    </select>
                    </div>
                </div>
                <div className=' flex justify-center'>
                <div>
                    <label className=' block text-gray-400'>Departure date</label>
                    <select>
                        <option> September, 19, 2020</option>
                    </select>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <div>
                    <label className=' block text-gray-400'>Person</label>
                    <select>
                        <option> 1</option>
                        <option> 2</option>
                        <option> 3</option>
                        <option> 4</option>
                    </select>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <button className='px-8 md:px-6 p-6 text-white bg-orange-600'>
                    Check Availability
                    </button>
                </div>
            </div>
        </form>
     </div>
    </div>
  )
}
