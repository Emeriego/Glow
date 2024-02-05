import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


const BgImg = ({ src, title, texts}) => {
  return (
    <div className="w-full h-[28rem] mx-0 my-0 relative mob:w-1/2 lg:w-[25%]       after:content=[''] after:h-full after:w-full after:bg-[#403721] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:opacity-70 after:hover:opacity-30 after:transition-all after:duration-30   ">
        <div className="img-wrap h-full w-full  text-white">
            <img src={src} className="image1 w-full h-full object-cover " />
        </div>
        <div className="inset-text absolute top-[45%] text-left w-[80%] left-10 text-white mr-8 z-10">
            <div className="heada text-white text-4xl capitalize">{title}</div>
            <div className="main-text text-white my-4 tracking-widest text-[0.8rem] leading-8">{texts}</div>
            <FaArrowRight />
        </div>
    </div>
  )
}

export default BgImg
