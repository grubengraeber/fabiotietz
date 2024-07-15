import React from 'react'
import About from './about'
import Work from './work/work'
import Education from './education/education'
import Skills from './skills/skills'

function Interface() {
  return (
      <div className='w-screen'>
        {/* <div className='flex flex-col items-center w-screen text-start'> */}
        <About />
        <Work />
        <Education />
        <Skills />
    </div>
  )
}

export default Interface
