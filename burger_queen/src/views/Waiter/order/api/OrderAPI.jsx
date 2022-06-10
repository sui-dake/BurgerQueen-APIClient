/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { useState, useEffect } from "react";
import { postOrder, getOrders } from "../../../../api/handlingAPI";

const OrderAPI = ({ newOrder }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customerOrder, setCustomerOrder] = useState({});
  //armar objeto, fetchearlo, y hacer el stringify, post, patch
  //const url = "http://localhost:4000/orders/";
  //for(let i=0, i<array.length i++){
  //
  //}

  let customer1 = `${newOrder.customer}`;
  console.log("NEW ORDER", newOrder.summary[0].orders[0]);
  let data = {
    customer: customer1, //customer newOrder.customer
    summary: [
      {
        product: newOrder.summary[0].orders[0].name, //name O item.name
        quantity: newOrder.summary[0].orders[0].quantity, //quantity
      },
      {
        product:  newOrder.summary[0].orders[0].name,
        quantity: newOrder.summary[0].orders[0].quantity,
      },
    ],
    total: "total", //total
  };
  //console.log(data)
  // let fetchData = {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: new Headers({
  //     "Content-Type": "application/json; charset=UTF-8",
  //   }),
  // };
  useEffect(() => {
    // fetch(url, fetchData)
    //   .then((res) => res.json())
    //   .then(
    //     (data) => {
    //       setLoading(true);
    //       setCustomerOrder(data);
    //     },
    //     (error) => {
    //       setLoading(true);
    //       setError(error);
    //     }
    //   );
    // getOrders();
    postOrder(data);
  }, []);

  console.log(customerOrder);
  return <div>{console.count()}</div>;
};

export default OrderAPI;
