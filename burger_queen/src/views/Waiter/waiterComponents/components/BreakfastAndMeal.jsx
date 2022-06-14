/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
//import { getProducts } from "../../../../api/handlingAPI";
//import Loading from "../../../../api/Loading";

export default function BreakfastAndMeal({
  product,
  setOrders,
  setTotal,
  orders,
  customerOrder,
  setCustomerOrder,
}) {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([product]);

  // const token = product.map((a) => {
  //   setItems({ ...a, quantity: quantity });
  // });

  const newOrder = [];
  //contador sume o reste segun click solo {numero} ligado al producto
  const updateState = () => {
    items.map((item) => {
      setOrders({
        ...orders,
        summary: [
          ...orders.summary,
          { name: item.name, price: item.price, quantity: quantity },
        ],
      });
    });
    //setOrders({ ...orders, newOrder });
    setTotal(quantity * product.price);
    function olis(total, current) {
      return total;
    }
    function suma(a, b) {
      if (a.name === b.name && a.quantity > b.quantity) {
        
        return a;
      } else if (a.name === b.name && a.quantity < b.quantity) {
        return b;
      } else if(a.name != b.name){
        return a, b;
      }
    }
    console.log("in Function", orders.summary.reduce(suma, 1));
    // console.log(
    //   "in Function2",
    //   orders.summary.reduce(function (orders, item) {
    //     return Object.assign(orders, { [item.summary]: item });
    //   })
    // );
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    updateState();
  }, [quantity]);

  //Podemos hacer otro componente para guardar la database de ORder ya lista,
  // para que vaya construyendo cada objeto con cada order que reciba
  return (
    <div id="table_content">
      <td
        style={{
          width: "140px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
          height: "30px",
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
        <p>{quantity * product.price}</p>
        <button onClick={handleIncrement}> + </button>
        {/*algo q agarra product.id para sacar precio, nombre. Multiplica precio por value de contador, crea const donde guarda semitotal. si el value
              es zero entonces no guarda precio ni nombre*/}
        {/*usar reduce para sumar todo, los valores zero no afectaran a suma y nos da precio total de toda la orden*/}
      </td>
    </div>
  );
}
