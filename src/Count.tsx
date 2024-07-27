import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count: React.FC = () => {
  const cartData = useSelector((state: any) => state.cart.cartData); // Replace 'any' with your actual state type
  console.log("cartData+++", cartData);

  return <h1>test</h1>;
};

export default Count;
