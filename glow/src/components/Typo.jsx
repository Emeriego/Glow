import React from 'react';
import { Children } from 'react';
// const [children, text, title] = props.data;
const Typo = ({children}) => {
  return (
    <>
    {children}
    <div className='txt-section-wrap w-full h-auto flex flex-col items-center justify-center space-y-4 md:items-start'>
        <h2 className="w-[20rem] font-thin text-3xl leading-loose text-center md:w-full md:text-left font-serif md:leading-10 tracking-wider lg:ml-[-2rem] lg:leading-loose">
            Helping Women feel more confident in health & Body
        </h2>
        <p className='txt-body text-center leading-8 text-justify lg:ml-[2rem] lg:leading-10' >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
        </p>
        <div className='px-5 py-2 uppercase bg-orange-400 lg:ml-[2rem]'>
            learn more
        </div>

    </div>
    </>

  )
}

export default Typo
