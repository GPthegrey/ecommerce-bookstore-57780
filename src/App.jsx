import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ListarProductosConBuscador from './components/HOC/ListarProductos'
import Item from './components/itemListContainer/Item'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/ejemplos/Error'
import ContadorEventListener from './components/ejemplos/ContadorEventListener.jsx'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path='/libros/:idLibro' element={<ItemDetailContainer />}></Route>
        <Route path='*' element={<Error />} />
      </ Routes>
    </BrowserRouter>
  )
}

export default App
