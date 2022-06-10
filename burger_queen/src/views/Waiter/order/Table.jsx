/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getProducts } from "../../../api/handlingAPI";
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";

const Table = ({ breakfast, meal, setOrders }) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    getProducts().then((data) => {
      setProducts(data);
    });
  };

  useEffect(() => {
    getMenu();
  }, []);

  const breakfastMenu = products.filter((type) => type.type == "Breakfast");
  const mealMenu = products.filter((type) => type.type == "Meal");

  useEffect(() => {
    if (breakfast == true) {
      setMenu(breakfastMenu);
    } else if (meal == true) {
      setMenu(mealMenu);
    }
  }, [breakfast, meal]);

  return (
    <div>
      <h2>PRICE    PRODUCT     QUANTITY</h2>
      {menu.map((product, key) => (
        <tr key={key}>
          <BreakfastAndMeal product={product} setOrders={setOrders}/>
        </tr>
      ))}
    </div>
  );
};

export default Table;
