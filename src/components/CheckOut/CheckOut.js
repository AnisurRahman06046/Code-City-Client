import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mt-5 "> Checkout</h1>
      <img className="mt-5" src={data.img} alt="" />

      <h4 className="text-3xl font-bold mt-5">{data?.name}</h4>
      <p className="text-2xl">Price : $ {data.price} </p>
    </div>
  );
};

export default CheckOut;
