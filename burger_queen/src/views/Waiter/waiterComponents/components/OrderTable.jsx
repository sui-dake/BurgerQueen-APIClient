import { useState, useEffect } from "react";

export default function OrderTable() {
  const [employee, setEmployee] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [quantity2, setQuantity2] = useState(0);

  const handleClick = () => {
    setQuantity(quantity + 1);
    setQuantity2(quantity2 + 1);
  };
  const handleClick2 = () => {
    setQuantity(quantity - 1);
    setQuantity2(quantity2 - 1);
  };
  return (
    <div>
      <table style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
        <tr>
          <th style={{ width: "180px", padding: "10px" }}>Price</th>
          <th style={{ width: "80px", padding: "10px" }}>Product</th>
          <th style={{ width: "180px", padding: "10px" }}>Quantity</th>
        </tr>

        {/* {employee.map((user) => ( */}
        <tr>
          <td
            style={{ width: "180px", padding: "5px 10px", textAlign: "center" }}
          >
            $5
          </td>
          <td
            style={{ width: "130px", padding: "5px 10px", textAlign: "center" }}
          >
            Americano
          </td>
          <td
            style={{ width: "180px", padding: "5px 10px", textAlign: "center" }}
          >
            <button
              style={{
                border: "none",
                background: "none",
                fontSize: "25px",
                marginRight: "5px",
              }}
              onClick={handleClick2}
            >
              {"  "}- {"  "}
            </button>
            {quantity}{" "}
            <button
              style={{
                border: "none",
                background: "none",
                fontSize: "25px",
              }}
              onClick={handleClick}
            >
              {"  "} + {"  "}
            </button>
          </td>
        </tr>
        {/* <tr>
          <td style={{ width: "180px", padding: "5px 10px" }}>$7</td>
          <td style={{ width: "130px", padding: "5px 10px" }}>Latte</td>
          <td
            style={{ width: "180px", padding: "5px 10px", textAlign: "center" }}
          >
            <button
              style={{
                border: "none",
                background: "none",
                fontSize: "25px",
                marginRight: "5px",
              }}
              onClick={handleClick2}
            >
              {" "}
              -{" "}
            </button>
            {quantity2}{" "}
            <button
              style={{
                border: "none",
                background: "none",
                fontSize: "25px",
              }}
            >
              {" "}
              +{" "}
            </button>
          </td>
        </tr> */}
        {/* ))} */}
      </table>
    </div>
  );
}
