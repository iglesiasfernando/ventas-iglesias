import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Link = require("react-router-dom").Link;
const NavLink = require("react-router-dom").NavLink;

function NabVar() {
    const categoryList = [{"id" : 1 ,"description" : "Vidrio"} ,{ "id":2 ,"description":"Ceramica"},{ "id":3 ,"description":"Metal"}];
   
    return (
        <div  className="navBar marginBottom1">
            <Link className ="centerVertical" to = "/"><img width="250px" alt="brand" src="/brand.png"></img></Link>

            <Breadcrumbs aria-label="breadcrumb" className="white right10 centerVertical">
                {categoryList.map((element,index) => {
                    return (
                                <NavLink key={index} id={index} className="white right10 noDecoration" to={"/category/" + element.id } >
                                    {element.description}   
                                </NavLink>
                

                    )})

                }   
            </Breadcrumbs>

                <CartWidget className ="centerVertical"/>
                
        </div>)
}

export default NabVar;