import React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import './CartWidget.css'; // Tell webpack that Button.js uses these styles


function CartWidget() {
    return (
            <ShoppingCart  className="shoppingCart"></ShoppingCart>
        )
}

export default CartWidget;