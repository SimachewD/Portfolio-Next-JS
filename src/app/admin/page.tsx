
'use client';

import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { signout } from '../actions/auth';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Page() {

  const router = useRouter(); // Initialize useRouter
  
  async function handleSignout (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
     await signout();
    router.push('/auth/signin'); // On success
  }

  return (
    <div className='p-12'>
      <div className='flex justify-between'>
        <h1 className=' text-2xl font-bold mb-5 text-cyan-300'>ADMIN PANEL</h1>  
        <button onClick={()=>handleSignout} className='text-red-600 border-2 shadow-md rounded-md bg-slate-200 px-3'>Logout</button>
      </div>
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
