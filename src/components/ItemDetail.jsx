import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount';


const ItemDetail = ({detail})=>{
    return (
    <div>
        <Item detail={detail}/>
        <ItemCount/>
    </div>
    )
}

export default ItemDetail;