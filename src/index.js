import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Startpage, Choosingpage } from './App';
import { Loginpage } from './Login';
import { Highscorepage } from './highscore';
import { MapOne } from './maps/map_one';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Startpage />}/>
      <Route path="/choose" element={<Choosingpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/highscore" element={<Highscorepage />} />
      <Route path="/mapone" element={<MapOne />} />
    </Routes>
  </Router>
);
