/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
//import { getProducts } from "../../../../api/handlingAPI";
//import Loading from "../../../../api/Loading";

export default function BreakfastAndMeal({ product, setOrders }) {
  const [quantity, setQuantity] = useState(0);
  const [items] = useState([product]);

  const newOrder = [];
  //contador sume o reste segun click solo {numero} ligado al producto
  const updateState = () => {
    items.map((item) => {
      newOrder.push({ ...item, quantity });
    });
    setOrders(newOrder);
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
    <div>
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
        {/*algo q agarra product.id para sacar precio, nombre. Multiplica precio por value de contador, crea const donde guarda semitotal. si el value
              es zero entonces no guarda precio ni nombre*/}
        {/*usar reduce para sumar todo, los valores zero no afectaran a suma y nos da precio total de toda la orden*/}
      </td>
    </div>
  );
}
