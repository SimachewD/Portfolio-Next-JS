'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signin } from '@/app/actions/auth';

export default function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Show loading state

    const result = await signin(email, password);

    if (result && result.errors) {
      setError(result.errors.name || 'An unknown error occurred.');
      setLoading(false); // Stop loading on error
    } else {
      // Successful signin: redirect to the admin page
      router.push('/admin');
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setLoading(false); // Stop loading after submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-48 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-black font-semibold text-center mb-6">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
}
