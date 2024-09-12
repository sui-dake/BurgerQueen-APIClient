/* eslint-disable react/prop-types */
import React from "react";
import styles from './customer.module.css'
const CustomerInput = ({ setCustomer }) => {

  const handleChange = (e) => {
    setCustomer(e.target.value);
  };

  return (
    <article className="customer">
      <p id={styles.customer}>Customer:</p>
      <input id={styles.input_customer} onChange={handleChange} />
    </article>
  );
};

export default CustomerInput;
