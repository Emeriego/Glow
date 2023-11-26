
import React from 'react'
import Nav from './components/nav'
import F1 from './assets/pretty6.jpg'
import F2 from './assets/pretty.jpeg'
import Typo from './components/Typo'

const App = () => {
  return (
   <div className='app-wrap mx-auto py-8 px-10 md:px-16'>
      <Nav />
      <div className="header-section w-full h-auto flex flex-col items-center justify-center gap-0 lg:flex-row lg:px-14">
        <div className="flex flex-col md:flex-row md:gap-10 lg:items-center">
          <div className="block bg-red-200 w-md md:w-[18rem] h-[30rem] lg:h-[20rem] mb-10 lg:w-[14rem] lg:mr-[-5rem] z-10">
            <img className=' object-cover md:w-[18rem] lg:w-full h-full' src={F1}/>
          </div>
          <div className="block bg-red-200 w-md md:w-[20rem]  h-[33rem] mb-10 lg:w-[22rem]">
            <img className=' object-cover md:w-full h-full' src={F2}/>
        </div>
        </div>
       <div className="flex flex-col items-center justify-center">
        <Typo >
        <h3 className="subhead w-full uppercase text-start lg:ml-[-4rem]">food + health + wellness</h3>
        </Typo>
       </div>
      </div>
   </div>
  )
}

export default App
