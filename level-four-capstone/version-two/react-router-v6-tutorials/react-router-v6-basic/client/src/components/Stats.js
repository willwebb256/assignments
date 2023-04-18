import axios from "axios";
import { useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import "../styles.css";

const Stats = () => {
  const [teamStats, setTeamStats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (!selectedDate) return;
    const options = {
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.sportsdata.io/v3/nba/stats/json/TeamGameStatsByDate/${selectedDate}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "571a4663ec6a472da3f1b9e982cb2048",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setTeamStats(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="stats-container">
      <h1 className="stats-title">Welcome to My Sports Feeds</h1>
      <p className="stats-text">
        Check out the latest team game stats from your favorite NBA teams.
      </p>
      <DateSelector onDateSelect={handleDateSelect} />
      <div className="stats-list">
        {teamStats.length > 0 ? (
          teamStats.map((stat) => (
            <div key={stat.GameId} className="stats-item">
              <h2 className="stats-subheading">
                {stat.Team} vs. {stat.Opponent}
              </h2>
              <p className="stats-data">Points: {stat.Points}</p>
              <p className="stats-data">Assists: {stat.Assists}</p>
              <p className="stats-data">Rebounds: {stat.Rebounds}</p>
              <p className="stats-data">Blocks: {stat.Blocks}</p>
              <p className="stats-data">Steals: {stat.Steals}</p>
              <p className="stats-data">Turnovers: {stat.Turnovers}</p>
            </div>
          ))
        ) : (
          <p className="stats-no-data">No stats available.</p>
        )}
      </div>
      <img
        className="stats-image"
        src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80"
        alt="Stats Page Banner"
      />
    </div>
  );
};

export default Stats;
