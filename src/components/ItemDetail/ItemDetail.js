import ItemCount from "../ItemCount/ItemCount";

import { useContext } from "react";

import { useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../Context/Context";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem({ id, name, img, price, stock }, quantity);

    setQuantityAdded(quantity);
  };

  return (
    <article className="CardItem">
      <header className="header">
        <h2 className="ItemHeader">{name}</h2>
      </header>

      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>

      <section>
        <p className="info">categoria: {category}</p>

        <p className="info">descripcion: {description}</p>

        <p className="info">precio: ${price}</p>
      </section>

      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
