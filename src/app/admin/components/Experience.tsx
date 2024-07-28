
"use client"

import React, { useState } from 'react';
import useFetchExperience from '@/app/admin/hooks/useFetchExperience';
import ExperienceForm from './ExperienceForm';

export default function Experience() {
  const { data, loading, error } = useFetchExperience();

  const [ showAddExperience, setShowAddExperience ] = useState(false);

  const toggleShowAddExperience = () => {
    setShowAddExperience(!showAddExperience);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className='sm:grid grid-cols-3 gap-3'>
        {data.map((expr) => (
          <div key={expr._id} className='mb-10'>
            <h1>{expr.title}</h1>
            <p>{expr.company}</p>
            <p>{expr.location}</p>
            <p>{new Date(expr.startDate).toLocaleDateString()}</p>
            {expr.endDate && <p>{new Date(expr.endDate).toLocaleDateString()}</p>}
            <p>{expr.description}</p>
          </div>
        ))}
      </div>
      {!showAddExperience && <button onClick={()=>toggleShowAddExperience()} className='bg-green-700 p-3 hover:bg-green-800 w-full'>Add Experience</button>}
      {showAddExperience && <button onClick={()=>toggleShowAddExperience()} className='bg-red-700 p-3 hover:bg-red-800 w-full'>Cancel</button>}

      <div className={`${showAddExperience?'':'hidden'}`}>
        <ExperienceForm />
      </div> 
    </section>
  );
}
