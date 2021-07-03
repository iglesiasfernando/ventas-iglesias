import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'react-router-dom/Link'
import NavLink from 'react-router-dom/NavLink'

function NabVar() {
    const categoryList = [{"id" : 1 ,"description" : "Vidrio"} ,{ "id":2 ,"description":"Ceramica"},{ "id":3 ,"description":"Metal"}];
   
    return (
        <div  className="navBar">
            <Link className ="centerVertical" to = "/"><img width="250px" src="/brand.png"></img></Link>

            <Breadcrumbs aria-label="breadcrumb" className="white right10 centerVertical">
                {categoryList.map((element,index) => {
                    return (
                                <NavLink key={index} id={index} className="white right10" to={"/category/" + element.id } >
                                    {element.description}   
                                </NavLink>
                

                    )})

                }   
            </Breadcrumbs>

                <CartWidget className ="centerVertical"/>
                
        </div>)
}

export default NabVar;