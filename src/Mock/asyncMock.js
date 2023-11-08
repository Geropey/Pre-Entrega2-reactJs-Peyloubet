export const products = [
  {
    id: 1,
    name: "Producto 1",
    category: "tops",
    price: 999.99,
    stock: 100,
  },

  {
    id: 2,
    name: "Producto 2",
    category: "remeras",
    price: 49.99,
    stock: 100,
  },

  {
    id: 3,
    name: "Producto 3",
    category: "remeras",
    price: 199.99,
    stock: 100,
  },

  {
    id: 4,
    name: "Producto 4",
    category: "gorros",
    price: 29.99,
    stock: 100,
  },

  {
    id: 5,
    name: "Producto 5",
    category: "tops",
    price: 5.99,
    stock: 100,
  },

  {
    id: 6,
    name: "Producto 6",
    category: "gorros",
    price: 7.99,
  },

  {
    id: 7,
    name: "Producto 7",
    category: "tops",
    price: 39.99,
    stock: 100,
  },

  {
    id: 8,
    name: "Producto 8",
    category: "gorros",
    price: 14.99,
  },

  {
    id: 9,
    name: "Producto 9",
    category: "remeras",
    price: 19.99,
  },

  {
    id: 10,
    name: "Producto 10",
    category: "remeras",
    price: 40.99,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (detailId) => {
  console.log(detailId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === detailId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
