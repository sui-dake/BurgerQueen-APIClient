/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";

export default function BreakfastAndMeal({ product, setOrders, orders }) {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([product]);
  const [semiTotal, setSemiTotal] = useState([]);
  //const []

  const newOrder = [];
  //contador sume o reste segun click solo {numero} ligado al producto
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  const semi = quantity * product.price;

  // const updateTotal = () => {
  //   items.map((item) => {
  //     setSemiTotal({

  //         ...orders.total.filter((self) => self.name !== item.name),
  //          name: item.name, semi: semi,

  //     });
  //     console.log(semiTotal);
  //   });
  // };
  const updateState = () => {
    // console.log(orders);
    items.map((item) => {
      setOrders({
        ...orders,
        summary: [
          ...orders.summary.filter((self) => self.name !== item.name),
          { name: item.name, price: item.price, quantity: quantity },
        ],
        total: [
          ...orders.total.filter((self) => self.name !== item.name),
          { name: item.name, semi: semi },
        ],
        // .reduce(function (a, b) {
        //   return a.semi + b.semi;
        // }[0])
      });
    });
  };

  useEffect(() => {
    if (quantity > 0) {
      updateState();
      //updateTotal();
    }
  }, [quantity]);

  return (
    <div id="table_content">
      <td
        style={{
          width: "140px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        $ {product.price}
      </td>
      <td
        style={{
          width: "220px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        {product.name}
      </td>
      <td
        id="counter_buttons"
        style={{
          width: "180px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        <button onClick={handleDecrement}> - </button>
        <p>{quantity}</p>

        <button onClick={handleIncrement}> + </button>
      </td>
    </div>
  );
}
