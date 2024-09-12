/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { updateProduct, getProduct } from "../../../api/handlingAPI";
import { useEffect, useState } from "react";
import styles from "./editproduct.module.css";
import send from "../../../assets/send.png";

const EditProducts = ({ id, handleClose }) => {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState([]);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState([]);
  const [productName1, setProductName1] = useState([]);
  const [price1, setPrice1] = useState(0);
  const [type1, setType1] = useState([]);

  const handleChangeName = (e) => {
    setProductName1(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice1(parseInt(e.target.value));
  };

  const handleChangeType = (e) => {
    setType1(e.target.value);
  };

  let nameF = productName1;
  let priceF = price1;
  let typeF = type1;

  const handleClick = () => {
    productName1.length == 0
      ? setProductName(product.name)
      : setProductName(nameF);
    price1 === 0 ? setPrice(product.price) : setPrice(priceF);
    type1.length === 0 ? setType(product.type) : setType(typeF);
    const productValue = {
      name: productName,
      price: price,
      type: type,
    };
    if (productName !== [] && price !== 0 && type !== []) {
      updateProduct(id, productValue).then(handleClose);
    }
    console.log(id, productValue);
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
        <select onChange={handleChangeType} className={styles.select}>
          <option className={styles.modals_select}>Type</option>
          <option className={styles.modals_select}>Breakfast</option>
          <option className={styles.modals_select}>Meal</option>
        </select>
      </p>

      <img id={styles.btn_send} type="button" src={send} onClick={handleClick} />
    </section>
  );
};

export default EditProducts;
