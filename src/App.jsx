import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ListarProductosConBuscador from './components/HOC/ListarProductos'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a tu Libreria online de confianza :)"/>
    </div>
  )
}

export default App
