
'use client'

import React from 'react'
import useFetchExperience from '../hooks/useFetchExperience';

export default function Experiences() {

  const { data, loading, error } = useFetchExperience();


  if (loading) {
    return <p className='mt-5 font-bold'>Loading...</p>;
  }

  if (error) {
    return <p className='mt-5 font-bold text-red-700'>Error: {error}</p>;
  }


  function formatDateToMonthYear(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

  return (
    <div id='experience' className='mt-24'>
      <h2 className='lg:hidden text-white px-5 mb-5 text-lg font-bold'>Experiences</h2>
      {data.map((expr) => (
        <div  key={expr._id} className='lg:flex break-words w-full px-5 mb-6 hover:bg-sky-950'>
          <div className='flex'>
            <p className='pt-1'>{formatDateToMonthYear(new Date(expr.startDate))} - </p>
            <p className='pt-1'> {expr.endDate ? formatDateToMonthYear(new Date(expr.endDate)): <p>PRESENT</p>}</p>
          </div>
          <div className='lg:ml-12'>
              <div className='flex text-white text-lg'><h3 className='mr-5'>{expr.title}</h3><h3 className='mr-5'>{expr.company}</h3><h2>{expr.location}</h2></div>
            <p className='mt-2 mb-2'>{expr.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
