import { useEffect, useState } from "react"
import axios from "axios";

import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Función para obtener los productos desde la FakeStore API
        const fetchProducts = async () => {
          try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);            
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        // Llamar a la función para obtener los productos
        fetchProducts();
      }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;