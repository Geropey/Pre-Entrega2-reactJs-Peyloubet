import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../Mock/asyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);

  console.log(products);

  const { detailId } = useParams();

  useEffect(() => {
    getProductById(parseInt(detailId))
      .then((response) => {
        setProducts(response);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [detailId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
