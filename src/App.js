import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
// import Home from './components/Home'
import CartButton from './components/CartButton'
import ItemCount from './components/ItemCount'

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
      <ItemCount/>
    </div>
  );
}

export default App;
