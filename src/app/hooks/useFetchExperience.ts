import { useEffect, useState } from 'react';
import { IExperience } from '@/app/lib/PortfolioModel';

const useFetchExperience = () => {
  const [data, setData] = useState<IExperience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/portfolio/experience');
        if (!res.ok) {
          throw new Error("Couldn't fetch, Please check your connection");
        }
        const result = await res.json();
        setData(result.data);
      } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchExperience;
