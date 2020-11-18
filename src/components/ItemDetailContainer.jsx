import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Data from './Data'

let promise = (productId) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Data.find((product) => product.id === parseInt(productId)))
        }, 3000);
    });
};

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState([])
    const { productId } = useParams()


    useEffect(() => {
        setLoading(true);
        promise(productId).then((product) => {
            setDetail(product);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {
                loading ? <h2>Loading...</h2> : <ItemDetail detail={detail} />
            }
        </div>
    )
}

export default ItemDetailContainer;