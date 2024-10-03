
'use client'

import React from 'react'
import useFetchExperience from '../hooks/useFetchExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLocation, faLocationArrow, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import Skeleton from './skeleton';

export default function Experiences() {

  const { data, loading, error } = useFetchExperience();


  if (loading) {
    return <Skeleton width="full" height="h-60" />;
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
        <div  key={expr._id} className='lg:grid lg:grid-cols-4 break-words w-fit px-5 mb-6 hover:bg-sky-950'>
          <div className=' text-sm lg:col-span-1'>
            <p className='pt-1'>{formatDateToMonthYear(new Date(expr.startDate))} - {expr.endDate ? formatDateToMonthYear(new Date(expr.endDate)): "PRESENT"}  </p>
          </div>
          <div className='lg:col-span-3'>
              <div className='sm:flex text-white'><h3 className='mr-5'>{expr.title}</h3><h3 className='mr-5'><FontAwesomeIcon icon={faBuilding} className='mr-2' />{expr.company}</h3><h3 className=' mr-5'><FontAwesomeIcon icon={faLocationDot} className='mr-2' />{expr.location}</h3></div>
            <p className='mt-2 mb-2'>{expr.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
