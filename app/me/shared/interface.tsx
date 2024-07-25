import React from 'react'
import About from './about'
import Work from './work/work'
import Education from './education/education'
import Technology from './skills/technology/technology'
import OtherSkills from './skills/others/others'

function Interface() {
  return (
      <div className='w-screen'>
        {/* <div className='flex flex-col items-center w-screen '> */}
        <div id='about' className='my-10'></div>
        <About />
        <div id='work' className='my-10'></div>
        <Work />
        <div id='education' className='my-10'></div>
        <Education />
        <div id='technology' className='my-10'></div>
        <Technology />
        <div id='other-skills' className='my-10'></div>
        <OtherSkills />
    </div>
  )
}

export default Interface
