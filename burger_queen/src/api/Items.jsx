import React from "react";

const Items = ({ item = "" }) => {
  const { name, price, type } = item;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{type}</p>
    </div>
  );
};

export default Items;
