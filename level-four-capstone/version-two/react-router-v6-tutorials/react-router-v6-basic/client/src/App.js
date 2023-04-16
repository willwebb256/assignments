import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scores from './components/Scores';
import Stats from './components/Stats';
import Standings from './components/Standings';
// import MyDatePicker from './components/MyDatePicker';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scores />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
        {/* <MyDatePicker /> */}
        <Footer />
      </div>
    </Router>
  );
}
