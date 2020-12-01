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
        promise(Data).then((result) => {
            setProducts(result)
        })
    }, []
    )

    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} detail={product}
                />
                
            ))}
        </div>
    )
}

export default ItemList;