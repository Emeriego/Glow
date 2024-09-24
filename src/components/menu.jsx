import React from 'react'
import { FaSearch} from 'react-icons/fa'


const menu = () => {
  return (
    <div className="hidden w-auto h-4 lg:flex flex-row items-center justify-center gap-3 text-center font-semibold mx-auto pb-10">
        <ul className="text-xs list-none flex space-x-6 uppercase">
          <li>Home</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About</li>
          <li>Pages</li>
          <li>Shop</li>
          <li>Podcast</li>
        </ul>
        <FaSearch />

    </div>
  )
}

export default menu
