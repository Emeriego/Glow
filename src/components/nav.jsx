import React from 'react'
import Menu from './menu'
import {FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaSearch, FaHamburger, FaGripLines} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='nav-wrap pb-8 pt-4 mob:px-8'>
    <div className=' flex flex-col justify-between items-center md:items-start space-y-12 md:space-y-0 pt-5 pb-8 sm:flex-row lg:mx-14'>
      <div className="min-w-max space-x-5 flex flex-row items-center justify-between">
        <FaFacebookF />
        <FaTwitter />
        <FaPinterestP />
        <FaInstagram />
      </div>
      <div className="font-serif font-10 transform-cpu">
        <h2 className="font-extralight text-5xl">GLORIA</h2>
      </div>
      <div className="w-30 h-8 border border-black px-4 py-1 text-1xl">WORK WITH ME</div>
    
    </div>

    <div className=" lg:hidden space-x-5 flex flex-row justify-center items-center mb-4 md:mt-">
        <FaSearch />
        <FaGripLines />
      </div>
      <hr className="width-full mob:hidden border-white " />

      <Menu />
</div>  )
}

export default Nav
