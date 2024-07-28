"use client";

import React, { useState } from 'react';

const ExperienceForm = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newExperience = {
      title,
      company,
      location,
      startDate,
      endDate,
      description,
    };

    const response = await fetch('http://localhost:3000/api/portfolio/experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExperience),
    });

    if (response.ok) {
      alert('Experience added successfully!');
      // Clear the form
      setTitle('');
      setDescription('');
      setCompany('');
      setLocation('');
      setStartDate('');
      setEndDate('');
    } else {
      alert('Failed to add experience.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='sm:grid sm:grid-cols-2 gap-10 space-y-4'>
      <div>
        <label htmlFor='title' className='block mt-5 text-sm font-medium text-gray-700'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>

      <div>
        <label htmlFor='company' className='block text-sm font-medium text-gray-700'>Company</label>
        <input
          type='text'
          id='company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          required
        />
      </div>

      <div>
        <label htmlFor='location' className='block text-sm font-medium text-gray-700'>Location</label>
        <div className='flex'>
          <input
            type='text'
            id='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        
      </div>
      <div>
        <label htmlFor='startDate' className='block text-sm font-medium text-gray-700'>Start Date</label>
        <input
          type='Date'
          id='startDate'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>

      <div>
        <label htmlFor='endDate' className='block text-sm font-medium text-gray-700'>End Date</label>
        <input
          type='Date'
          id='endDate'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
        <button
          type='submit'
          className='bg-green-700 text-white p-3 rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        >
          Add Experience
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
