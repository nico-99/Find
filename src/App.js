import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import CartButton from './components/CartButton'
import ItemCount from './components/ItemCount'

function App() {

  let name = 'Home'
  return (
    <div className="container">
      <NavBar name={name} />
      <Home />
      <CartButton />
      <ItemCount />
    </div>
  );
}

export default App;
