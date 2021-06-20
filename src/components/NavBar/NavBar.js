import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
function NabVar() {
    const categoryList = ["Vidrio","Ceramica","Metal"];
    const categoryClick = () =>
    {
      
    }
    return (
        <div  className="navBar">
            <label className ="centerVertical">Tienda Iglesias </label>

            <Breadcrumbs aria-label="breadcrumb" className="white right10 centerVertical">
                {categoryList.map(element => {
                    return (
                                <Link className="white right10" href="/" onClick={categoryClick}>
                                    {element}
                                </Link>
                

                    )})

                }   
            </Breadcrumbs>

                <CartWidget className ="centerVertical"/>
                
        </div>)
}

export default NabVar;