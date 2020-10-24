import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  let name = 'Home'
  let click = ()=> console.log('Este boton funciona!!');
  return (
    <div className="container">
      <NavBar name={name}/>
      <Home click={click} />
    </div>
  );
}

export default App;
