import axios from "axios";
import { useEffect, useState } from "react";

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/games',
      params: {date: '2022-04-15'},
      headers: {
        'X-RapidAPI-Key': '06ca4e213emsh539a11f104a8eb9p1d4f21jsne562fdac0534',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setScores(response.data.api.games);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div className="scores-container">
      <h1>Welcome to My Sports Feeds</h1>
      <p>Check out the latest news and scores from your favorite NBA teams.</p>
      {scores.map((game) => (
        <div key={game.gameId}>
          <h2>{game.hTeam.fullName} vs. {game.vTeam.fullName}</h2>
          <p>{game.statusGame}</p>
        </div>
      ))}
      <img className="scores-image" src="https://images.unsplash.com/photo-1532040683343-edbde6dd500d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="homepage" />
    </div>
  );
};

export default Scores;








