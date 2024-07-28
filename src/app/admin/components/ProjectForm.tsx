"use client";

import React, { useState } from 'react';

const ProjectForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [technology, setTechnology] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      name,
      description,
      technologies,
      imageUrl,
      githubUrl,
      demoUrl,
    };

    const response = await fetch('http://localhost:3000/api/portfolio/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });

    if (response.ok) {
      alert('Project added successfully!');
      // Clear the form
      setName('');
      setDescription('');
      setTechnologies([]);
      setImageUrl('');
      setGithubUrl('');
      setDemoUrl('');
    } else {
      alert('Failed to add project.');
    }
  };

  const handleAddTechnology = () => {
    if (technology) {
      setTechnologies([...technologies, technology]);
      setTechnology('');
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  return (
    <form onSubmit={handleSubmit} className='sm:grid sm:grid-cols-2 gap-10 space-y-4'>
      <div>
        <label htmlFor='name' className='block mt-5 text-sm font-medium text-gray-700'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label htmlFor='description' className='block text-sm font-medium text-gray-700'>Description</label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor='technologies' className='block text-sm font-medium text-gray-700'>Technologies</label>
        <div className='flex'>
          <input
            type='text'
            id='technologies'
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          <button
            type='button'
            onClick={handleAddTechnology}
            className='ml-2 bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Add
          </button>
        </div>
        <div className='mt-2'>
          {technologies.map((tech, index) => (
            <div key={index} className='flex items-center'>
              <span className='text-black'>{tech}</span>
              <button
                type='button'
                onClick={() => handleRemoveTechnology(tech)}
                className='ml-2 text-red-500'
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor='imageUrl' className='block text-sm font-medium text-gray-700'>Image URL</label>
        <input
          type='url'
          id='imageUrl'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <label htmlFor='githubUrl' className='block text-sm font-medium text-gray-700'>GitHub URL</label>
        <input
          type='url'
          id='githubUrl'
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <label htmlFor='demoUrl' className='block text-sm font-medium text-gray-700'>Demo URL</label>
        <input
          type='url'
          id='demoUrl'
          value={demoUrl}
          onChange={(e) => setDemoUrl(e.target.value)}
          className=' text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <button
          type='submit'
          className='bg-green-700 text-white p-3 rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        >
          Add Project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
