import React from "react";
import { useState } from "react";
import { postProduct } from "../../../api/handlingAPI";
import styles from "./addProduct.module.css";
//import send from "../../../assets/send.png";

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
    setPrice(parseInt(e.target.value));
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
        <p className={styles.modals_p}>
          Product:{" "}
          <input
            onChange={handleChange}
            placeholder="Product"
            className={styles.modals_inputs}
          />
        </p>
        <p className={styles.modals_p}>
          Price:{" "}
          <input
            onChange={handleChangePrice}
            placeholder="Price"
            className={styles.modals_inputs}
          />
        </p>
        <p className={styles.modals_p}>
          Type:{" "}
          <select onChange={handleChangeType} className={styles.select}>
            <option className={styles.modals_select}>Type</option>
            <option className={styles.modals_select}>Breakfast</option>
            <option className={styles.modals_select}>Meal</option>
          </select>
        </p>
        <img
          id={styles.btn_send}
          src="check.png"
          type="button"
          onClick={handleClick}
        />
      </section>
    </div>
  );
};

export default AddProduct;
