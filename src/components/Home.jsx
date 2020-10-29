import React, { useState } from 'react'
import '../home.css'

function Home() {
    const [greeting, setGreeting] = useState("Esto puede cambiar")

  const changeGreeting = () => {
    setGreeting("Se cambio...")
  }

    return (
        <div className='box'>
            <h2>{greeting}</h2>
            <button onClick={changeGreeting}>Cambiar</button>
        </div>
    )
}

export default Home;