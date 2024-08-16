import React from "react";
import Cart from "./Cart";
import products from "../data/Products"
const CartSection = () => {
  const carts = [{ id: 1, product: products[1], quantity: 3, cost: 66.9 },
  { id: 2, product: products[6], quantity: 3, cost: 66.9 },
  { id: 3, product: products[7], quantity: 1, cost: 9.9 }];
  return (
    <div>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default CartSection;
