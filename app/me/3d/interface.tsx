import React from 'react'
import About from '../shared/about'
import Work from '../shared/work/work'
import Education from '../shared/education/education'
import Technology from '../shared/skills/technology/technology'
import OtherSkills from '../shared/skills/others/others'

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
