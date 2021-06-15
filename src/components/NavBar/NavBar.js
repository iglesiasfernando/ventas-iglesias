import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

function NabVar() {
    return (
        <div  className="navBar">
            <h2>Tienda online <CartWidget/></h2>
            
        </div>)
}

export default NabVar;