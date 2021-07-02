import logo from './logo.svg';
import './App.css';
import NabVar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer'
import ItemCount from './components/Items/ItemCount/ItemCount';

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
      <nav>
          <ul>
            <li>
              <Link to="/item/lista">Lista container</Link>
            </li>
            <li>
              <Link to="/item/listaSola">Contador con un NAN</Link>
            </li>
            
          </ul>
        </nav>
      
      <Switch>
        <Route exact path="/">
            
          </Route>
          <Route path="/item/lista">
            <ItemListContainer />
          </Route>
          <Route path="/item/listaSola">
            <ItemCount />
          </Route>
          
      </Switch>
    </div>
    </Router>
  );
  
}

export default App;
