/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { updateProduct, getProduct } from "../../../api/handlingAPI";
import { useEffect, useState } from "react";
import styles from "./addProduct.module.css";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const EditProducts = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState([]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState([]);

  const handleChangeName = (e) => {
    setProductName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  let nameF = productName;
  let priceF = price;
  let typeF = type;

  const handleClick = () => {
    productName == [] && setProductName(product.name);
    price == 0 && setPrice(product.price);
    type == [] && setType(product.type);
    let productValue = {
      name: productName,
      price: price,
      type: type,
    };
    console.log(productValue);
  };
  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  return (
    <section>
      <p className={styles.modals_p}>
        Product:{" "}
        <input
          onChange={handleChangeName}
          defaultValue={product.name}
          className={styles.modals_inputs}
        />
      </p>
      <p className={styles.modals_p}>
        Price: ${" "}
        <input
          onChange={handleChangePrice}
          defaultValue={product.price}
          type="number"
          className={styles.modals_inputs}
        />
      </p>
      <p className={styles.modals_p}>
        Type:{" "}
        <select onChange={handleChangeType} className={styles.modals_input}>
          <option className={styles.modals_select}>Type</option>
          <option className={styles.modals_select}>Breakfast</option>
          <option className={styles.modals_select}>Meal</option>
        </select>
      </p>
      <button id="button_new_client" onClick={handleClick}>
        Send
      </button>

      <img id="btn-send" type="button" onClick={handleClick} />
    </section>
  );
};

export default EditProducts;
