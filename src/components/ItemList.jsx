import React, { useState, useEffect } from 'react'
import Data from './Data'
import Item from './Item'
// import {Link} from 'react-router-dom'

let promise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(Data);
        }, 3000);
    });
};

//const [valor actual, función para actualizar el valor] = useState(valor inicial)

const ItemList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let ejecutarPromesa = promise(Data)
        ejecutarPromesa.then(result => setProducts(result))
    }, []
    )

    return (
        <div>
            {products.map((product) => (
                <Item id={product.id}
                    name={product.name}
                    stock={product.stock}
                />
            ))}

        </div>
    )
}

export default ItemList;