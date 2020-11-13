import React, { useState } from 'react'
import '../home.css'
import ItemCount from './ItemCount'
import CartButton from './CartButton'
import ItemList from './ItemList'

function Home() {
    const [greeting, setGreeting] = useState("Esto puede cambiar")

  const changeGreeting = () => {
    setGreeting("Se cambio...")
  }

    return (
        <div className='box'>
            <h2>{greeting}</h2>
            <button onClick={changeGreeting}>Cambiar</button>
            <ItemCount/>
            <CartButton/>
            <ItemList/>
        </div>
    )
}

export default Home;