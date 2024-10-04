
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
        const res = await fetch('/api/portfolio/about');

        if (!res.ok) {
          throw new Error("Couldn't fetch, Please check your connection");
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
