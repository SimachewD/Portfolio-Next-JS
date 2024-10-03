
"use client"

import React from 'react'
import useFetchProject from '../hooks/useFetchProject';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Skeleton from './skeleton';

export default function Projects() {

  const { data, loading, error } = useFetchProject();

  if (loading) {
    return <Skeleton width="full" height="h-72" />;
  }
  if (error) {
    return <p className='mt-5 font-bold text-red-700'>Error: {error}</p>;
  }

  return (
    <div id='projects' className='mt-24 lg:mb-24'>
      <h2 className='lg:hidden text-white mb-5 px-5 text-lg font-bold'>Projects</h2>
        {data.map((project) => (
          <div key={project._id} className='flex flex-col-reverse break-words lg:flex-row w-full px-5 mb-6 hover:bg-sky-950'>
              <Image 
                src={project.imageUrl || "demo.jpg"}
                alt="Project image"
                width={500}
                height={500}
                className='lg:mt-3 lg:mr-3 lg:w-1/4 lg:h-full'
              />            
              <div className='mb-3 lg:w-3/4'>
                <div className='flex justify-between'>
                  <h3 className='mr-10 text-white'>{project.name}</h3>
                  <div className='w-fit'>
                      <a href={project.githubUrl} className='mr-3 hover:text-teal-200 hover:text-lg'><FontAwesomeIcon icon={faGithub} /></a>
                      <a href={project.demoUrl} className='hover:text-teal-200 hover:text-lg'>visit<FontAwesomeIcon icon={faArrowRight} /></a>
                  </div>
                </div>

                <p className='mt-2 mb-3 '>{project.description}</p>
                  <div className='flex flex-wrap'>
                    {project.technologies.map((tech)=>(<i key={tech} className='mb-2 bg-sky-900 text-teal-400 rounded-2xl px-3 py-1 mr-1'>{tech}</i>))}
                  </div>
              </div>
          </div>
        ))}
    </div>
  )
}
