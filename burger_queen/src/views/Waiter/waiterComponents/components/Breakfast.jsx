/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Counters from "./Counters";

export default function OrderTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
            <th style={{ width: "150px", padding: "10px", fontSize: "35px" }}>
              Price
            </th>
            <th style={{ width: "180px", padding: "10px", fontSize: "35px" }}>
              Product
            </th>
            <th style={{ width: "180px", padding: "10px", fontSize: "35px" }}>
              Quantity
            </th>
          </tr>

          {breakfast.map((item, key) => (
            <tr key={key}>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "28px"
                }}
              >
                $ {item.price}
              </td>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "28px"
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "28px"
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
