import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ProjectForm from './components/ProjectForm'

export default function page() {
  return (
    <div className='p-12'>
      <h1 className=' text-2xl font-bold mb-5 text-cyan-300'>ADMIN PANEL</h1>
      <div className=' bg-slate-800 p-24 rounded-lg sm:w-3/4 mx-auto'>
        <div className='p-3 min-h-44 mb-8 rounded-lg border-b-4 border-r-2 border-slate-400 hover:border-pink-300'>
          <h1 className=' text-2xl font-bold mb-5'>About Me</h1>
          <AboutMe />
        </div>

        <div className='p-3 min-h-44 mb-8 rounded-lg border-b-4 border-r-2 border-slate-400 hover:border-pink-300'>
          <h1 className=' text-2xl font-bold mb-5'>Experience</h1>
          <div className='ml-5'>
            <Experience />
          </div>
        </div>
        
        <div className='p-3 min-h-44 mb-8 rounded-lg border-b-4 border-r-2 border-slate-400 hover:border-pink-300'>
          <h1 className=' text-2xl font-bold mb-5'>Projects</h1>
          <div className='ml-5'>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}
