import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
    return (
        <div>
            <ul>
                <li>
                    <a href="/" className='cartIcon'>Cart <FaShoppingCart/></a>
                </li>
            </ul>
        </div>
    )
}

export default CartIcon;