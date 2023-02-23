import React from 'react'
import work1 from '../assets/work1.png'

export default function Work() {
  return (
    <div className='flex flex-col items-center mt-[588px] workContainer'>
        <div className='px-5 py-5 flex justify-center bg-[rgb(0,0,0,.2)] w-full'>
            <img src={work1} alt="" />
        </div>
    </div>
  )
}
