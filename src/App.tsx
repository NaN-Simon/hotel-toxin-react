import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.scss';
import ColorAndTypes from './pages/ColorAndTypes/ColorAndTypes';
import FormAndElements from './pages/FormAndElements/FormAndElements';
import StartPage from './pages/StartPage/StartPage';
function App() {

  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/colorandtypes' element={<ColorAndTypes/>}/>
      <Route path='/formandelements' element={<FormAndElements/>}/>
    </Routes>
  );
}

export default App;
