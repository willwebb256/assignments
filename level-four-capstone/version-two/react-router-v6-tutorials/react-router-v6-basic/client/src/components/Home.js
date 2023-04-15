import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.mysportsfeeds.com/v2.1/pull/nba';

const Home = () => {

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        Authorization: 'Basic ' + btoa('2a693691-eeaf-4e68-860a-81444d')
      }
    })
      .then(response => {
        // handle successful response here
        console.log(response.data);
      })
      .catch(error => {
        // handle error here
        console.error(error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to My Sports Feeds</h1>
      <p>Check out the latest news and scores from your favorite NBA teams.</p>
      <form>
        <label htmlFor="date">Select a Date:</label>
        <input type="date" id="date" name="date" />
        <button type="submit">Submit</button>
      </form>
      <img className="home-image" src="https://images.unsplash.com/photo-1532040683343-edbde6dd500d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="homepage" />
    </div>
  );
};

export default Home;







