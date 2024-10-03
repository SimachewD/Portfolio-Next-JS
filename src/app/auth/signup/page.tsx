'use client'

import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { signup } from '@/app/actions/auth'  // Import the signup action
import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     // Call the signup function
     await signup(email, password);

     // Reset form fields
     setEmail('');
     setPassword('');
     router.push('/admin');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />      
      <input 
        name="password" 
        placeholder="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

