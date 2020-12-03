import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/item.css'
// import ItemCount from './ItemCount'


const Item = ({ detail: { id, name, stock } }) => {
    return (
            <div className="item-container">
                <h2>Producto:</h2>
                <ul>
                    <li>Name: {name}</li>
                    <li>Id: {id}</li>
                    <li>Stock: {stock}</li>
                    <Link to={`/itemdetail/${id}`}><button>ver detalle</button></Link>
                    {/* <ItemCount/> */}
                </ul>
            </div>
    )
}

export default Item;