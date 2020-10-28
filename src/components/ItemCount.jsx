import React, { useState } from "react"

function ItemCount() {
    const [number, setNumber] = useState(0)

    const upCounter = () => {
        setNumber(number + 1)
    }

    const downCounter = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <button onClick={downCounter}>-</button>
                <h2>{number}</h2>
            <button onClick={upCounter}>+</button>
        </div>
    )
}

export default ItemCount;