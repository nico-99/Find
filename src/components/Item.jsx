import React from 'react'


const Item = ({id, name, stock})=>{
    return (
    <div>
        <h2>Producto:</h2>
        <ul>
            <li>Name: {name}</li>
            <li>Id: {id}</li>
            <li>Stock: {stock}</li>
        </ul>
    </div>
    )
}

export default Item;