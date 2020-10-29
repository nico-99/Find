import React, { useState } from "react"
import Count from './Count'

function ItemCount() {
    const [number, setNumber] = useState(0)


    const counter = (sign)=>{
        if(sign === '+') setNumber(number + 1)
        else if (sign === '-') setNumber(number-1)
    }



    // const upCounter = () => {
    //     setNumber(number + 1)
    // }

    // const downCounter = () => {
    //     setNumber(number - 1)
    // }

    return (
        <div>
            <Count number={number}  counter={counter}/>
            {/* <button onClick={downCounter}>-</button>
                <h2>{number}</h2>
            <button onClick={upCounter}>+</button> */}
        </div>
    )
}

export default ItemCount;