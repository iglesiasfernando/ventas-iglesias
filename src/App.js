import logo from './logo.svg';
import './App.css';
import NabVar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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
          <ItemDetailContainer/>
        </Route>
          
      </Switch>
    </div>
    </Router>
  );
  
}

export default App;
