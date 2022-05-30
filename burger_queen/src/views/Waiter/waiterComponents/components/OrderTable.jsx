/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Counters from "./Counters";

export default function OrderTable() {
  const [employee, setEmployee] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setQuantity(quantity + 1);
    setQuantity2(quantity2 + 1);
  };
  const handleClick2 = () => {
    setQuantity(quantity - 1);
    setQuantity2(quantity2 - 1);
  };
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
  }, []);

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
            <th style={{ width: "180px", padding: "10px" }}>Price</th>
            <th style={{ width: "80px", padding: "10px" }}>Product</th>
            <th style={{ width: "180px", padding: "10px" }}>Quantity</th>
          </tr>

          {products.map((item, key) => (
            <tr key={key}>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                $ {item.price}
              </td>
              <td
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                <Counters />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
