import React, { useState } from 'react'
import '../home.css'
import ItemCount from './ItemCount'

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
        </div>
    )
}

export default Home;