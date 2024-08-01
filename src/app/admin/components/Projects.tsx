

"use client"

import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import useFetchProject from '../../hooks/useFetchProject';

export default function Projects() {
  const { data, loading, error } = useFetchProject();

  const [ showAddProject, setShowAddProject ] = useState(false);

  const toggleShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
        <div className='xl:grid xl:grid-cols-3 gap-3'>
          {data.map((project) => (
            <div key={project._id} className='mb-10'>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <p className=''>{project.technologies.map((tech)=>(<li key={tech} className='mr-2 font-semibold'>{tech}</li>))}</p>
              <p>{project.imageUrl}</p>
              <p>{project.githubUrl}</p>
              <p>{project.demoUrl}</p>
            </div>
          ))}
        </div>
        {!showAddProject && <button onClick={()=>toggleShowAddProject()} className='bg-green-700 p-3 hover:bg-green-800 w-full'>Add Project</button>}
        {showAddProject && <button onClick={()=>toggleShowAddProject()} className='bg-red-700 p-3 hover:bg-red-800 w-full'>Cancel</button>}
        
        <div className={`${showAddProject?'':'hidden'}`}>
          <ProjectForm />
        </div>  
    </div>
  );
}
