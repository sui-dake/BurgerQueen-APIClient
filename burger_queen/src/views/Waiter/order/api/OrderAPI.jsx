/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { useState, useEffect } from "react";

const OrderAPI = ({ newOrder }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customerOrder, setCustomerOrder] = useState([]);
  //armar objeto, fetchearlo, y hacer el stringify, post, patch
  const url = "http://localhost:4000/orders/";
  //for(let i=0, i<array.length i++){
  //
  //}
  const producto = 'carne de res'
  let customer1 = `${newOrder.customer}`;
  console.log(newOrder[0])
  let data = {
    customer: customer1, //customer newOrder.customer
    summary: [
      {
        product: producto, //name O item.name
        quantity: "newOrder[0]", //quantity
      },
      {
        product: "Soda",
        quantity: 3,
      },
    ],
    total: 22, //total
  };

  let fetchData = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  };
  useEffect(() => {
    fetch(url, fetchData)
      .then((res) => res.json())
      .then(
        (data) => {
          setLoading(true);
          setCustomerOrder(data);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, [newOrder]);

  console.log(customerOrder);
  return <div>{console.count()}</div>;
};

export default OrderAPI;
