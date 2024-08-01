
"use client"

import React, { useState, useEffect } from 'react';

export default function useFetchAbout() {
  const [aboutData, setAboutData] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isupdated, setIsUpdated] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the current "about" data 
    const fetchAboutData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/portfolio/about');

        if (!res.ok) {
          throw new Error('Failed to fetch about data');
        }

        const data = await res.json();
        setAboutData(data.about.aboutme);

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, [isupdated]);

  return {aboutData, loading, error, setIsUpdated};
}
