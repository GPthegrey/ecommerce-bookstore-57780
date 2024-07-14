import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Ejemplos/Error";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path='/libros/:idLibro' element={<ItemDetailContainer />}></Route>
          <Route path="/carrito" element={<Carrito />} />
          <Route path='*' element={<Error />} />
        </ Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
