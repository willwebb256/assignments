import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scores from './components/Scores';
import Stats from './components/Stats';
import Standings from './components/Standings';

export const AppContext = createContext();

export default function App() {
  const [state, setState] = useState({ selectedDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // get the selected date from the form data
    const formData = new FormData(e.target);
    const selectedDate = formData.get("selectedDate");
    // update the state with the selected date
    setState({ ...state, selectedDate });
  };

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Scores state={state} />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/standings" element={<Standings />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}
