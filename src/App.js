import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './func/home';
import Sobre from './func/about';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
