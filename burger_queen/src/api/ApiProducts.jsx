import React from "react";
import { useState, useEffect } from "react";

const ApiProducts = () => {
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
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {products.map((item, key) => (
            <div key={key}>
              <li>
                $ {item.price} ,{item.name}, {item.type}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
};

export default ApiProducts;
