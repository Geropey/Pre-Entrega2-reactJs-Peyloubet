import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path="/remeras" element={<ItemListContainer category="Remeras" />} />
          <Route path="/tops" element={<ItemListContainer category="Tops" />} />
          <Route path="/gorros" element={<ItemListContainer category="Gorros" />} />
          <Route path="/item/:id" element={<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
