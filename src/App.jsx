import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a tu Libreria online de confianza :)"/>


    </div>
  )
}

export default App
