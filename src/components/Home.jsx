import React, { useState } from 'react'
import '../home.css'
// import ItemCount from './ItemCount'
// import CartButton from './CartButton' ejemplo
import ItemList from './ItemList'

function Home() {
  //   const [greeting, setGreeting] = useState("Esto puede cambiar")

  //   const changeGreeting = () => {
  //   setGreeting("Se cambio...")
  // ejemplo
  // }

    return (
        <div className='box'>
            {/* <h2>{greeting}</h2> ejemplo */}
            {/* <button onClick={changeGreeting}>Cambiar</button> ejemplo */}
            {/* <CartButton/> */}
            <ItemList/>
            {/* <ItemCount/> */}
        </div>
    )
}

export default Home;