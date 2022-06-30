/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styles from "./BreakfastAndMeal.module.css";

export default function BreakfastAndMeal({ product, parentCallback }) {
  const handleIncrement = () => {
    parentCallback(product, "Increment");
  };

  const handleDecrement = () => {
    parentCallback(product, "Decrement");
  };

  return (
    <div className={styles.table_content}>
      <td className={styles.counter_buttons}>$ {product.price}</td>
      <td className={styles.counter_buttons}>{product.name}</td>
      <td className={styles.counter_buttons}>
        <button className={styles.button} onClick={handleDecrement}>
          {" "}
          -{" "}
        </button>
        <p>{product.quantity}</p>
        <button className={styles.button} onClick={handleIncrement}>
          {" "}
          +{" "}
        </button>
      </td>
    </div>
  );
}
