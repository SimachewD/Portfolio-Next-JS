import { IProject } from '@/app/lib/PortfolioModel';
import { useEffect, useState } from 'react';

const useFetchProject = () => {
  const [data, setData] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/portfolio/projects');
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

export default useFetchProject;
