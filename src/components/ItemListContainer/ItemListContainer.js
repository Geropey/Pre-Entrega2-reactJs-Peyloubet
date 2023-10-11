import { useEffect, useState } from "react"
import axios from "axios";

import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        const fetchProducts = async () => {
          try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);            
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
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