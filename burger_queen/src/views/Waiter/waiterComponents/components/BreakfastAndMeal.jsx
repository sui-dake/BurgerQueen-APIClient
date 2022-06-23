/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export default function BreakfastAndMeal({ product, parentCallback }) {

  const handleIncrement = () => {
    parentCallback(product, "Increment");
  };

  const handleDecrement = () => {
    parentCallback(product, "Decrement");
  };

  return (
    <div id="table_content">
      <td
        style={{
          width: "140px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        $ {product.price}
      </td>
      <td
        style={{
          width: "220px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        {product.name}
      </td>
      <td
        id="counter_buttons"
        style={{
          width: "180px",
          padding: "5px 10px",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        <button onClick={handleDecrement}> - </button>
        <p>{product.quantity}</p>
        <button onClick={handleIncrement}> + </button>
      </td>
    </div>
  );
}
