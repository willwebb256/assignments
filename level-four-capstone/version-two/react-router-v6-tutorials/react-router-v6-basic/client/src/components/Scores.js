import axios from "axios";
import { useEffect, useState } from "react";
import DateSelector from "./DateSelector";

const Scores = () => {
  const [gameScores, setGameScores] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (!selectedDate) return;
    const options = {
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${selectedDate}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "571a4663ec6a472da3f1b9e982cb2048",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setGameScores(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="scores-container">
      <h1 className="scores-title">Welcome to My Sports Feeds</h1>
      <p>Check out the latest news and scores from your favorite NBA teams.</p>
      <DateSelector onDateSelect={handleDateSelect} />
      <div className="scores-list">
        {gameScores.length > 0 ? (
          gameScores.map((game) => (
            <div>
              <div className="scores-data" key={game.GameId}>
                <h2>
                  {game.HomeTeam} vs. {game.AwayTeam}
                </h2>
                <p>
                  {game.HomeTeamScore} - {game.AwayTeamScore}
                </p>
                <p>{game.Status}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No scores available.</p>
        )}
      </div>
      <img
        className="scores-image"
        src="https://images.unsplash.com/photo-1532040683343-edbde6dd500d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        alt="homepage"
      />
    </div>
  );
};

export default Scores;
















