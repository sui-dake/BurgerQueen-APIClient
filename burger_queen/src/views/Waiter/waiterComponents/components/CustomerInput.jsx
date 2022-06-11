/* eslint-disable react/prop-types */
import React from "react";

const CustomerInput = ({ setCustomer }) => {

  const handleChange = (e) => {
    setCustomer(e.target.value);
  };

  return (
    <article className="customer">
      <p id="customer">Customer:</p>
      <input id="input_customer" onChange={handleChange} />
    </article>
  );
};

export default CustomerInput;
