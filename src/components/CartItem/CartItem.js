import React from 'react';

const CartItem = ({ name, id, price, quantity }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <button>Borrar item</button>
    </div>
  );
};

export default CartItem;
