import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ListarProductosConBuscador from './components/HOC/ListarProductos'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Item from './components/itemListContainer/Item'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a tu Libreria online de confianza :)"/>
      <ItemDetailContainer />
    </div>
  )
}

export default App
