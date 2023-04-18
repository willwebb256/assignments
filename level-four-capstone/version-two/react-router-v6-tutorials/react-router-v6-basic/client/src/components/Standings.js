import axios from "axios";
import { useEffect, useState } from "react";
import "../styles.css";
import YearSelector from "./YearSelector";

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2023);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.sportsdata.io/v3/nba/scores/json/Standings/${selectedYear}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "571a4663ec6a472da3f1b9e982cb2048",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setStandings(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="standings-container">
      <h1 className="standings-title">NBA Standings</h1>
      <div className="standings-year-selector">
        <label htmlFor="year-selector">Select a Year:</label>
        <YearSelector
          selectedYear={selectedYear}
          onChange={handleYearChange}
        />
      </div>
      <div className="standings-list">
        {standings.length > 0 ? (
          standings.map((standing) => (
            <div key={standing.TeamID} className="standings-item">
              <h2 className="standings-subheading">{standing.Name}</h2>
              <p className="standings-data">Wins: {standing.Wins}</p>
              <p className="standings-data">Losses: {standing.Losses}</p>
              <p className="standings-data">
                Win Percentage: {standing.WinPercentage}
              </p>
              <p className="standings-data">Points For: {standing.PointsFor}</p>
              <p className="standings-data">
                Points Against: {standing.PointsAgainst}
              </p>
            </div>
          ))
        ) : (
          <p className="standings-no-data">No standings available.</p>
        )}
      </div>
      <img className="standings-image" src="https://images.unsplash.com/photo-1548311344-5324fa0dbad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Standings Page Banner"/>
    </div>
  );
}

export default Standings;
