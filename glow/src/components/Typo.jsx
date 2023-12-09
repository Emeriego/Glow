import React from 'react';
import { Children } from 'react';
// const [children, text, title] = props.data;
const Typo = ({children, header, content}) => {
  return (
    <>
    {children}
    <div className='txt-section-wrap w-full h-auto flex flex-col items-center justify-center space-y-4 tab:items-start'>
        {header}
        {content}
        <div className='px-5 py-2 uppercase bg-orange-400 lg:ml-[2rem]'>
            learn more
        </div>
        
      

    </div>
    </>

  )
}

export default Typo
