import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/Context';
import Cart from './components/Cart/Cart';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer/>} />
          <Route path='/Cart' element={<Cart/>} /> 
          
           
        </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>

  );

}

export default App;