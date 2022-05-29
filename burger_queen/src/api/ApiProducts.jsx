import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Items from "./Items";

const ApiProducts = ({ props }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async (props) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/products/` + props);
      if (!res) {
        console.log(props + "not found");
      }

      const data = await res.json();
      console.log([...data.results]);
      setProducts([...data.results]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(props);
  }, [props]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {products.map((item) => (
        <Items key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ApiProducts;
