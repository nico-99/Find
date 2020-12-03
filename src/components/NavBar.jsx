import React from 'react'
import '../assets/navBar.css';
import { BiLogIn, BiHome } from 'react-icons/bi';
import CartIcon from './CartIcon'

function NavBar(props) {
    return (
        <nav>
            <h1 className='logo'>Find!</h1>
            <ul>
                <li><a href="/">{props.name} <BiHome/></a></li>
                <li><a href="/">Sign in <BiLogIn/></a> </li>
                <CartIcon/>
                <li>(Number)</li>
            </ul>
        </nav>
    )
}

export default NavBar;