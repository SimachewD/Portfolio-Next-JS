"use client"

import React, { useState, useEffect } from 'react';
import useFetchAbout from '../../hooks/useFetchAbout';

export default function EditAboutForm() {

  const { aboutData, loading, error, setIsUpdated } = useFetchAbout();

  const [newAboutData, setNewAboutData] = useState('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (aboutData) {
      setNewAboutData(aboutData);
    }
  }, [aboutData]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewAboutData(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/portfolio/about', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({aboutme:newAboutData}), 
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
      }

      alert(data.message);
      setIsEditing(false); // Exit editing mode after successful update
      setIsUpdated(true); // refresh page after successful update
    } catch (error: unknown) {
      alert('An unknown error occurred');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-4">
        <p className=" mb-8">{aboutData}</p>
        {!isEditing && (
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        {isEditing && (
          <>
            <label htmlFor='About' className='block text-sm font-medium text-gray-700'>About</label>
            <textarea
              id='About'
              value={newAboutData}
              onChange={handleChange}
              className='text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required>
            </textarea>
          </>
        )}
      </div>
      {isEditing && (
        <>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Update About
        </button>
        <button
          className="bg-red-500 text-white ml-3 py-2 px-4 rounded hover:bg-red-700" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </>
      )}
    </form>
  );
}
