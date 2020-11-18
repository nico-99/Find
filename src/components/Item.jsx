import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({detail: {id, name, stock}})=>{
    return (
    <div>
        <h2>Producto:</h2>
        <ul>
            <li>Name: {name}</li>
            <li>Id: {id}</li>
            <li>Stock: {stock}</li>
            <Link to={`/itemdetail/${id}`}><button>ver detalle</button></Link>
        </ul>
    </div>
    )
}

export default Item;