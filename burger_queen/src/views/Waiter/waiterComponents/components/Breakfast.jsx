/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Contador from "./Contador";

export default function OrderTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(products);
  const [orders, setOrders] = useState({
    quantity: 0,
    product: "",
  });

  let array = [];
  const newOrder = [];

  const updateState = (newItem, quantity) => {
    products.map((item) => {
      // if(newOrder == []){
      if (newItem.name == item.name) {
        newOrder.push({ ...item, quantity });
      } else if (item.length > 1) {
        newOrder.push({ ...item, quantity });
      }
      // }} else {
      //   newItem.name == item.name ? newOrder.push({ ...item, quantity}): null
      // }
    });

    setOrder(newOrder);
  };

  //Podemos hacer otro componente para guardar la database de ORder ya lista,
  // para que vaya construyendo cada objeto con cada order que reciba
  useEffect(() => {
    fetch("http://localhost:4000/products/")
      .then((res) => res.json())
      .then(
        (data) => {
          setLoading(true);
          setProducts(data);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
    updateState();
  }, []);
  const breakfast = products.filter((type) => type.type == "Breakfast");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <table
          style={{ border: "none", borderRadius: "20px", padding: "10px" }}
        >
          <tr>
            <th style={{ width: "140px", padding: "10px", fontSize: "30px" }}>
              Price
            </th>
            <th style={{ width: "220px", padding: "10px", fontSize: "30px" }}>
              Product
            </th>
            <th style={{ width: "180px", padding: "10px", fontSize: "30px" }}>
              Quantity
            </th>
          </tr>

          {breakfast.map((item, key) => {
            return (
              <tr key={key}>
                <td
                  style={{
                    width: "140px",
                    padding: "5px 10px",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  $ {item.price}
                </td>
                <td
                  style={{
                    width: "220px",
                    padding: "5px 10px",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    width: "180px",
                    padding: "5px 10px",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  <Contador
                    setOrders={setOrders}
                    item={item}
                    order={order}
                    orders={orders}
                    updateState={updateState}
                  />
                  {/*mandarle item de props a contador para que tenga acceso a API*/}
                  {/*algo q agarra item.id para sacar precio, nombre. Multiplica precio por value de contador, crea const donde guarda semitotal. si el value
              es zero entonces no guarda precio ni nombre*/}
                  {/*usar reduce para sumar todo, los valores zero no afectaran a suma y nos da precio total de toda la orden*/}
                  {/* {console.log(
              array.push(item.price) +
                " precio " +
                array.reduce((a, b) => a + b, 0)
                orders.reduce((a,b) => a+b, 0)
            )} */}
                </td>
              </tr>
            );
          })}
          {console.log(order)}
        </table>
      </div>
    );
  }
}
