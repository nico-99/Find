import React from 'react'
import '../navBar.css';
import CartIcon from './CartIcon'

function NavBar(props) {
    return (
        <nav>
            <h1 className='logo'>Find!</h1>
            <ul>
                <li><a href="/">{props.name}</a></li>
                <li><a href="/">Login</a> </li>
                <CartIcon/>
                {/* <li><a href="/">Cart</a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;