import React from 'react'
import Sekil2 from '../sekiller/Sekil2'

const Header = () => {
  return (
    <div className='md:h-[350px] relative'>
      <Sekil2/>
      <div className='absolute left-0 top-0 bottom-0 right-0'>
      <h1 className='w-full h-full flex justify-center items-center text-red-700 font-bold text-[200%] md:text-[100px]'>WE ARE ONE</h1>
      </div>
    </div>
  )
}

export default Header