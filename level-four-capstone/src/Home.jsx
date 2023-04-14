import React, { useState, useEffect, useRef } from 'react';
import { getMushrooms } from './api';

function Home() {
  const [mushrooms, setMushrooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const mushrooms = await getMushrooms();
        if (isMountedRef.current) {
          setMushrooms(mushrooms);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (isLoading) {
    return <div>Loading mushrooms...</div>;
  }

  return (
    <div>
      <h1>Welcome to My Mushroom App!</h1>
      <h2>Recent Mushroom Observations</h2>
      <ul>
        {mushrooms.map((mushroom) => (
          <li key={mushroom.id}>
            {mushroom.name} ({mushroom.observed_on})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
