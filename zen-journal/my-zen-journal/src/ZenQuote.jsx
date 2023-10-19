import React, { useState, useEffect } from 'react';

const ZenQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchZenQuote() {
      try {
        const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://zenquotes.io/api/quotes/';
        const response = await fetch(corsProxyUrl + apiUrl, {
          method: 'GET',
          headers: {
            'Origin': 'http://your-website-url.com', // Replace with your actual website URL
          },
        });
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].q);
        }
      } catch (error) {
        console.error('Error fetching Zen quote:', error);
      }
    }

    fetchZenQuote();
  }, []);

  return (
    <div>
       <blockquote style={{ color: 'white' }}>{quote}</blockquote>
    </div>
  );
};

export default ZenQuote;


