import React, { useState } from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import paperPlane from '../assets/paperPlane.svg'

export default function Work() {
  const [showIcon1, setShowIcon1] = useState(false)
  const [showIcon2, setShowIcon2] = useState(false)


  return (
    <div className='flex flex-col items-center mt-[588px] workContainer gap-20'>
        <div className='px-5 py-20 flex justify-center items-center bg-[#FFF0EC] w-full workCard'>
        <img src={work1} alt="" className='hover:opacity-50 duration-200' onMouseEnter={() => setShowIcon1(true)} onMouseLeave={() => setShowIcon1(false)} />
            {showIcon1 ? <div className='absolute w-[10%] flex justify-center items-center border-[#C8C9D0] border-[5px] rounded-[50%] iconDiv'>
              <img src={paperPlane} alt="" className='m-5 relative top-2 right-1'/>
            </div> : null}
        </div>
        <div className='px-5 py-20 flex justify-center items-center bg-[#2D314C] w-full workCard'>
            <img src={work2} alt="" className='w-[90.65%] hover:opacity-50 duration-200' onMouseEnter={() => setShowIcon2(true)} onMouseLeave={() => setShowIcon2(false)} />
            {showIcon2 ? <div className='absolute w-[10%] flex justify-center items-center border-[#C8C9D0] border-[5px] rounded-[50%] iconDiv'>
              <img src={paperPlane} alt="" className='m-5 relative top-2 right-1'/>
            </div> : null}
        </div>
    </div>
  )
}
