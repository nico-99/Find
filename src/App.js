import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  let name = 'Home!'
  return (
    <div className="container">
      <NavBar name={name}/>
    </div>
  );
}

export default App;
