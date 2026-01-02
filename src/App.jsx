import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Default route - Full Body Checkup */}
          <Route path="/" element={<LandingPage />} />
          {/* Dynamic route for other pages */}
          <Route path="/:pageSlug" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;