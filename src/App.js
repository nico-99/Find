import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
// import Home from './components/Home'
import CartButton from './components/CartButton'

function App() {

  const [greeting, setGreeting] = useState("Esto puede cambiar")

  const changeGreeting = () => {
    setGreeting("Se cambio...")
  }

  let name = 'Home'
  // let click = () => console.log('Este boton funciona!!');
  return (
    <div className="container">
      <NavBar name={name} />
      {/* <Home click={click} /> */}
      <h2>{greeting}</h2>
      <button onClick={changeGreeting}>Cambiar</button>
      <CartButton/>
    </div>
  );
}

export default App;
