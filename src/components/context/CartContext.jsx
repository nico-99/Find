import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([]);

export default function CartContextProvider (props) {
    const [contador, setContador] = useState(0);

    useEffect(()=>{
        console.log('contador: ', contador, );
    },[contador])

    return (
        <CartContext.Provider value={contador, setContador}>
             {props.children}
        </CartContext.Provider>
    )
}