import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../../Mock/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
