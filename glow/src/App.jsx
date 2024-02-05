
import React from 'react'
import Nav from './components/nav'
import F5 from './assets/pretty6.jpg'
import F2 from './assets/pretty.jpeg'
import F3 from './assets/p4.jpg'
import F4 from './assets/p5.jpg'
import F6 from './assets/p6.jpg'

import Typo from './components/Typo'
import FancyImg from './components/FancyImg'
import BgImg from './components/bgImg'

const App = () => {
  return (
   <div className='w-full app-wrap h-full'>
      <Nav />
      <section className="header-section px-10 mob:px-16 pb-12 relative w-full h-full flex flex-col items-center justify-center gap-0 lg:flex-row lg:px-24">
        <div className="flex flex-col mob:grow mob:flex-row mob:gap-8 mob:items-center mob:justify-center lg:items-center lg:w-[55%]">
          <div className="my-imgs block grow bg-red-200 md:grow  h-[28rem] mob:h-[20rem] md:h-[30rem] md:max-w-[24rem] lg:h-[20rem] mb-10 lg:w-[14rem] lg:mr-[-5rem] z-10">
            <img className=' object-cover w-full mob:w-full lg:w-full h-full mob:h-full' src={F2}/>
          </div>
          <div className="block bg-red-200 grow h-[28rem] mob:h-[20rem] md:grow md:max-w-[24rem] md:h-[30rem] lg:h-[35rem] mb-10 lg:w-[22rem]">
            <img className=' object-cover mob:w-full h-full' src={F2}/>
        </div>
        </div>
       <div className="flex grow flex-col items-center w-full justify-center lg:w-[45%]">
          <Typo
          header={
            <h2 className="w-[20rem] font-thin text-3xl leading-10 text-center tab:w-full tab:text-left font-serif tab:leading-10 tracking-wider lg:ml-[-2rem] lg:leading-loose">
                Helping Women feel more confident in health & Body
            </h2>
          }
          content={
            <p className='txt-body text-center leading-8 text-justify lg:ml-[2rem] lg:leading-8' >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            </p>
          }
        >
            <h3 className="subhead w-full uppercase text-center tab:text-left lg:ml-[-4rem]">food + health + wellness</h3>
          </Typo>
       </div>
          <div class="custom-shape-divider-bottom-1701397433">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
          </div>
      </section>
      <section className="header-section2 px-10 mob:px-16 pb-12 relative w-full h-full flex flex-col items-center justify-center gap-0 lg:px-24">
        <div className="section-header z-10 relative py-10 width-[]">
          <h2 className='uppercase text-center text-700 mb-6 text-2xl leading-8 tracking-widest'>GLORIA FITNESS MENTOR</h2>
          <h4 className='leading-8 tracking-wider text-center'>Health Coach for professional Models and Entrepreneurs</h4>
        </div>
        <div className="flex z-10 flex-col mob:grow lg:flex-row mob:gap-7 mob:items-center mob:justify-center lg:items-center lg:w-[90%]">
          <FancyImg 
            title = "Personal Coach"
            num= "01"
            src= {F6}
          />
          <FancyImg 
            title = "Personal Coach"
            num= "02"
            src= {F4}
          />
          <FancyImg 
            title = "Personal Coach"
            num= "03"
            src= {F5}
          />
        </div>
          <div class="custom-shape-divider-bottom-1701397433">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
          </div>
      </section>
      <section className="header-section3 h-auto relative flex mob:flex-wrap mob:grow flex-col mob:flex-row  w-full px-0 mob:px-0 pb-0 items-center justify-center gap-0 lg:px-0">
        <BgImg
          src = {F4}
          title= "Lion Savere"
          texts= "Irurecillum occaecat deserunt voluptate eiusmod proident.."
        />
        <BgImg
          src = {F3}
          title= "velit Great Context"
          texts= "Laborum int culpa non cupidatat fugiat qui."
        />
        <BgImg
          src = {F2}
          title= "Jandor moseded"
          texts= "Consequat excepteur pariatur in officia."
        />
        <BgImg
          src = {F6}
          title= "Corrected Matrix"
          texts= "Sit voluptate magna non ut."
        />
          {/* <div class="custom-shape-divider-bottom-1701397433">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
          </div> */}
      </section>
      <section className="header-section4 px-10 mob:px-16 py-[8rem] relative w-full h-full flex flex-col items-center justify-center gap-0 lg:flex-row lg:px-24">
        <div className="flex w-full flex-col lg:items-center lg:flex-row mob:gap-4  lg:w-[65%]">
          <div className="my-imgs w-full lg:h-[100px] grow bg-red-200 md:grow display-none mob:bg-green-300 lg:min-h-[20rem] mb-10 lg:mr-[-2rem] z-10">
            <img className=' object-cover w-full lg:w-full h-full' src={F5}/>
          </div>
          <div className="bg-red-200 grow w-full block overflow-hidden rounded rounded-t-full h-[28rem] mob:min-h-[58rem] lg:min-h-[33rem] mb-10 lg:min-w-[20rem]">
            <img className=' object-cover w-full mob:w-full h-full' src={F2}/>
        </div>
        </div>
       <div className="flex grow flex-col items-center w-full justify-center lg:w-[45%]">
          <Typo 
            header={
              <h2 className="w-[20rem] font-thin text-3xl leading-10 text-center tab:w-full tab:text-left font-serif tab:leading-10 tracking-wider lg:ml-[2rem] lg:leading-loose">
                  Helping Women feel more confident in health & Body
              </h2>
            }
            
            content={
              <p className='txt-body text-center leading-8 text-justify lg:ml-[2rem] lg:leading-8' >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </p>
            }
          >
          

            <h3 className="subhead w-full uppercase text-center tab:text-left lg:ml-[4rem]"></h3>
          </Typo>
       </div>
      </section>
   </div>
  )
}

export default App
