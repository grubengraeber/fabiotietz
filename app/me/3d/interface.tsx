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
        <About />
        <Work />
        <Education />
        <Technology />
        <OtherSkills />
    </div>
  )
}

export default Interface
