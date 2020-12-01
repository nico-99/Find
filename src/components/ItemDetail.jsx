import React from 'react'
import Item from './Item'
import Count from './Count'


const ItemDetail = ({detail})=>{
    return (
    <div>
        <Item detail={detail}/>
        <Count/>
        <button>Ver Mas</button>
    </div>
    )
}

export default ItemDetail;