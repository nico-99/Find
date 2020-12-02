import React, { useState } from "react"
import Count from './Count'
import AddButton from './AddButton'

function ItemCount() {

    const [number, setNumber] = useState(0)
    let min = 0
    let max = 10

    const counter = (sign)=>{
        if((sign === '+') && (number < max)) setNumber(number + 1)
        else if ((sign === '-') && (number > min)) setNumber(number-1)
    }

    return (
        <div>
            <Count number={number}  counter={counter}/>
            <AddButton number={number}/>
        </div>
    )
}

export default ItemCount;