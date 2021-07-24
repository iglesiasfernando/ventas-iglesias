import React, { useContext }  from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import './CartWidget.css'; // Tell webpack that Button.js uses these styles
import {CartContext} from '../../contexts/CartContext'
import Badge from '@material-ui/core/Badge';
const NavLink = require("react-router-dom").NavLink;


function CartWidget() {
    const cartContext = useContext(CartContext)

    return (
        <div className="centerVertical right">
           
            { 
                cartContext.cartItems?.length > 0 ?  
                <Badge badgeContent={cartContext.cartItems.reduce((elem1,elem2) => {
                    return elem1 + elem2.quantity
                    },0)
                    } color="primary">
                    <NavLink className = "noDecoration" to={"/cart"}><ShoppingCart className="shoppingCart" ></ShoppingCart></NavLink>

                      
                </Badge> : null
                
            }

        </div>
       
        )
}

export default CartWidget;