
"use client"

import React from 'react'
import useFetchAbout from '../hooks/useFetchAbout'
import Skeleton from './skeleton';

export default function About() {
  const { aboutData, loading, error } = useFetchAbout();

  if (loading) {
    return <Skeleton width="full" height="h-48" />;
  }

  if (error) {
    return <p className='mt-5 font-bold text-red-700'>Error: {error}</p>;
  }
  return (
    <div id='about' className=' break-words'>
      <h2 className='lg:hidden text-white px-5 my-5 text-lg font-bold'>About</h2>
      <p className='px-5'>{aboutData}</p>
    </div>
  )
}
