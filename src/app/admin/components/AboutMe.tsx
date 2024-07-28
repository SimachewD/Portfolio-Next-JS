import React from 'react'

export default async function AboutMe() {
  const res = await fetch('http://localhost:3000/api/portfolio/about');
  const data = await res.json();
  return (
    <div className='ml-5'>
      {data.about.aboutme}
    </div>
  )
}
