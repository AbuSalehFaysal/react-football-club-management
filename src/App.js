import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json'
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Player></Player>
    </div>
  );
}

export default App;
