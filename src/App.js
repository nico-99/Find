import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {

  let name = 'Home'
  return (
    <div className="container">
      <NavBar name={name}/>
      <Home/>
    </div>
  );
}

export default App;
