import React from 'react';
import './App.css';
import GameStart from './components/GameStart';
import Singleplayer from './components/Singleplayer';
import Multipleplayer from './components/Multipleplayer';

import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Routes>
        <Route path='/' element={<GameStart/>}/>
        <Route path='/Singleplayer' element={<Singleplayer/>}/>
        <Route path='/Multipleplayer' element={<Multipleplayer/>}/>
      </Routes>
    </div>
  );
}

export default App;
