import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer/>} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;