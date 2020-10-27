import React, { useState, useEffect } from 'react'

function CartButton() {
    const [number, setNumber] = useState(0)
    const [time, setTime] = useState('')

    useEffect(() => {
        let time = Date()
        setTime(time)
    }, [number])

    const click = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick={click}>Click!!</button>
            <ul>
                <li>Veces que clickeaste: {number}</li>
                <li>ultims vez: {time}</li>
            </ul>
        </div>
    )
}

export default CartButton;