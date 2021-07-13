import React, { useState } from 'react';

import './App.css';
import NabVar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './contexts/CartContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([])

  const addItem = (item) => {
    setCartItems([...cartItems,item])
  }
  const removeItem = (item) => {
    const newList = cartItems.filter((element) => element.id === item.id);
    setCartItems(newList)
    
  }
  const clear = () => {
   
      setCartItems([])
    
  }
  const isInCart = (item) => {
    const itemSearch = cartItems.filter(element => element.item.id === item.id)[0]
    if(itemSearch){
      return true
    }
    else{
      return false;
    }
    
  
}
  return (
    <Router>
    <NabVar/>
    <div className="App">
      
      {/* <nav>
          <ul>
            <li>
              <Link to="/item/lista">Lista container</Link>
            </li>
            <li>
              <Link to="/item/listaSola">Contador con un NAN</Link>
            </li>
            
          </ul>
        </nav> */}
      
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <CartContext.Provider value = {{ addItem,removeItem,clear,isInCart }} >
            <ItemDetailContainer/>

          </CartContext.Provider>
        </Route>
          
      </Switch>
    </div>
    </Router>
  );
  
}

export default App;
