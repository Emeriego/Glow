import React from 'react'
import { Children } from 'react'

const FancyImg = ({title, num, src}) => {
  return (
    <div className='fancy-wrap w-full grow flex mb-6 flex-col  gap-8 items-center justify-center '>
        <div className="img-title w-[90%]">
            <h2 className='text-center text-2xl tracking-wide mb-2 uppercase'>{title}</h2>
            <h4 className='text-center tracking-wider text-2xl text-100 uppercase mb-2'>{num}</h4>
        </div>
        <div className="img-cont mob:min-w-[145%] relative bg-[#f1f6da] lg:min-w-[90%]">
            <div className="w-[1px] h-12 absolute bg-red-200 top-[-2.5rem] left-1/2 "></div>
            <div className="block overflow-hidden w-[87%] mob:w-[90%] mx-auto mt-5 bg-[#fff] grow h-[28rem] mob:h-[20rem] md:grow mob:max-w-[87%] md:h-[30rem] lg:h-[30rem] mb-5">
                <img className=' object-cover mob:w-full h-full transition-all duration-1000 mix-blend-normal hover:scale-110 hover:opacity-80' src={src}/>
            </div>
            <div className="w-[1px] h-12 absolute bg-red-200 bottom-[-2.5rem] left-1/2 "></div>
        </div>
        <button className="py-1 px-4 mb-4  bg-orange-400 border-none mt-2 uppercase">Learn More</button>
    </div>
  )
}

export default FancyImg
