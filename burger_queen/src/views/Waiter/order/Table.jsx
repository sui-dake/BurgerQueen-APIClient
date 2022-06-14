/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
//import { useState, useEffect } from "react";
//import { getBreakfast, getMeal } from "../../../api/handlingAPI";
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";

const Table = ({
  products,
  setOrders,
  setTotal,
  orders,
  setCustomerOrder,
  customerOrder,
}) => {
//  const [products, setProducts] = useState([]);
  //const [menu, setMenu] = useState([]);

  // const getMenuBreakfast = () => {
  //   getBreakfast().then((data) => {
  //     setProducts(data);
  //   });
  // };

  // const getMenuMeal = () => {
  //   getMeal().then((data) => {
  //     setProducts(data);
  //   });
  // };

  // useEffect(() => {
  //   getMenuBreakfast();
  //   getMenuMeal();
  // }, []);

  //const breakfastMenu = products.filter((type) => type.type == "Breakfast");
  //const mealMenu = products.filter((type) => type.type == "Meal");

  // useEffect(() => {
  //   if (breakfast == true) {
  //     setMenu(breakfastMenu);
  //   } else if (meal == true) {
  //     setMenu(mealMenu);
  //   }
  // }, [breakfast, meal]);

  return (
    <div id="order_table">
      <article
        className="table_titles"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <p className="table_p">PRICE</p>
        <p className="table_p">PRODUCT</p>
        <p className="table_p">QUANTITY</p>
      </article>
      {products.map((product, key) => (
        <tr id='table' key={key}>
          <BreakfastAndMeal
            product={product}
            setOrders={setOrders}
            setTotal={setTotal}
            orders={orders}
            customerOrder={customerOrder}
            setCustomerOrder={setCustomerOrder}
          />
        </tr>
      ))}
    </div>
  );
};

export default Table;
