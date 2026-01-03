import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComprehensivePage from './pages/ComprehensivePage';
import ExecutivePage from './pages/ExecutivePage';
import EssentialPage from './pages/EssentialPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Default route - Comprehensive Full Body Checkup */}
          <Route path="/" element={<ComprehensivePage />} />
          {/* Specific routes for each package type */}
          <Route path="/comprehensive" element={<ComprehensivePage />} />
          <Route path="/executive" element={<ExecutivePage />} />
          <Route path="/essential" element={<EssentialPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;