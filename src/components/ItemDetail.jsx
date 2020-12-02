import React from 'react'
import AddButton from './AddButton';
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