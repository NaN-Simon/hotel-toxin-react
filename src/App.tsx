import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ColorAndTypes from './pages/ColorAndTypes/ColorAndTypes';
import FormAndElements from './pages/FormAndElements/FormAndElements';
import Cards from './pages/Cards/Cards';
import StartPage from './pages/StartPage/StartPage';
import './App.scss';
import HeadersAndFooters from './pages/HeadersAndFooters/HeadersAndFooters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/colorandtypes" element={<ColorAndTypes />} />
      <Route path="/formandelements" element={<FormAndElements />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/headersandfooters" element={<HeadersAndFooters />} />
    </Routes>
  );
}

export default App;
