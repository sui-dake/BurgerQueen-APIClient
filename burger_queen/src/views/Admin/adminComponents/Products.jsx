/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Loading from "../../../api/Loading";
import ButtonAddProduct from "./ButtonAddProduct";
import Erase from "./Erase";
import "./products.css";

export default function Products() {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div>
        <table
          style={{ border: "none", borderRadius: "20px", padding: "10px" }}
        >
          <tr>
            <th style={{ width: "160px", padding: "10px", fontSize: "30px" }}>
              Products
            </th>
            <th style={{ width: "160px", padding: "10px", fontSize: "30px" }}>
              Price
            </th>
            <th style={{ width: "160px", padding: "10px", fontSize: "30px" }}>
              Type
            </th>
          </tr>

          {products.map((item, key) => (
            <tr key={key}>
              <td
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                $ {item.price}
              </td>
              <td
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                {item.type}
              </td>
              <td>
                <img
                  type="button"
                  style={{ width: "40px", height: "40px" }}
                  src="./edit1.png.png"
                />
              </td>
              <td>
                <Erase />
              </td>
            </tr>
          ))}
        </table>
        <ButtonAddProduct />
      </div>
    );
  }
}
