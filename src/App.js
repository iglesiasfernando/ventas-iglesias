import logo from './logo.svg';
import './App.css';
import NabVar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <NabVar/>
      <ItemListContainer greeting="Cargando info..."></ItemListContainer>
      
    </div>
  );
}

export default App;
