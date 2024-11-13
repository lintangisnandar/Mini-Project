import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Plants from './pages/Plants';
import AddPlants from './pages/AddPlants';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/add-plants" element={<AddPlants />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;