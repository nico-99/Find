import React from 'react'
import Item from './Item'
import Count from './Count'
// import {Link} from 'react-router-dom'


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