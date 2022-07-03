import React from "react";
import { useState } from "react";
import { postProduct } from "../../../api/handlingAPI";
import styles from "./addProduct.module.css";

const AddProduct = () => {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState([]);

  let productValue = {
    name: product,
    price: price,
    type: type,
  };

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleClick = () => {
    postProduct(productValue).then((data) => {
      setProduct(data);
    });
  };

  return (
    <div>
      <section>
        <p className={styles.email_pass_p}>
          Product:{" "}
          <input
            onChange={handleChange}
            placeholder="Product"
            className={styles.email_pass}
          />
        </p>
        <p className={styles.email_pass_p}>
          Price:{" "}
          <input
            onChange={handleChangePrice}
            placeholder="Price"
            className={styles.email_pass}
          />
        </p>
        <p className={styles.email_pass_p}>
          Type:{" "}
          <select onChange={handleChangeType} className={styles.email_pass}>
            <option>Type</option>
            <option>Breakfast</option>
            <option>Meal</option>
          </select>
        </p>
        <button id="button_new_client" onClick={handleClick}>
          Send
        </button>

        <img id="btn-send" type="button" onClick={handleClick} />
      </section>
    </div>
  );
};

export default AddProduct;
