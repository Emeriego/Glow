import React from 'react'
import {FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaSearch, FaHamburger, FaGripLines} from 'react-icons/fa'

const Nav = () => {
  return (
    <>
    <div className='container flex flex-col justify-between items-center space-y-14 pt-5 mb-4 md:mx-4 md:flex-row'>
      <div className="min-w-max space-x-5 flex flex-row items-center justify-between">
        <FaFacebookF />
        <FaTwitter />
        <FaPinterestP />
        <FaInstagram />
      </div>
      <div className="font-serif font-10 transform-cpu">
        <h2 className="font-extralight text-5xl">GLORIA</h2>
      </div>
      <div className="w-auto h-8 border border-black px-2 py-1 font-2xl">WORK WITH ME</div>
    
    </div>
    <div className="space-x-5 flex flex-row justify-center items-center ">
        <FaSearch />
        <FaGripLines />
      </div>
</>  )
}

export default Nav
