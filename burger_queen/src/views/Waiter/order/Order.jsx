/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";
import { useParams } from "react-router-dom";
import {
  getOrder,
  updateOrder,
  getBreakfast,
  getMeal,
} from "../../../api/handlingAPI";

export default function Order() {
  // const navigate = useNavigate();

  const [customerOrder, setCustomerOrder] = useState([]);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({
    ...customerOrder,
    summary: [],
    //no olvidemos wardartmb la hora
  });
  // console.log(order);
  //NO olvidar poner la fecha y hora en la orden ok y el estado
  // console.log("CUSTOMER ORDER", customerOrder);
  // console.log("ORDERS", orders);

  const getMenuBreakfast = () => {
    getBreakfast().then((data) => {
      data = data.map((item) => {
        return { ...item, quantity: 0 };
      });
      setProducts(data);
    });
  };

  const getMenuMeal = () => {
    getMeal().then((data) => {
      data = data.map((item) => {
        return { ...item, quantity: 0 };
      });
      setProducts(data);
    });
  };

  const handleClick = () => {
    console.log(order);
    updateOrder(id, order).then((data) => {});
    //navigate("/preparing-order");
  };

  const getCustomerOrder = () => {
    getOrder(id).then(setCustomerOrder);
  };

  useEffect(() => {
    getCustomerOrder();
  }, [id]);

  const updateProducts = (product, action) => {
    let index = products.findIndex((item) => {
      return item.id == product.id;
    });

    const newState = products.map((obj) => {
      if (obj.id === product.id) {
        const currentQuantity = product.quantity;
        if (
          (action == "Decrement" && currentQuantity != 0) ||
          action == "Increment"
        ) {
          const newQuantity =
            action == "Increment" ? currentQuantity + 1 : currentQuantity - 1;
          setTotal(
            action === "Increment"
              ? total + product.price
              : total - product.price
          );
          return {
            ...obj,
            quantity: newQuantity,
          };
        }
      }
      return obj;
    });

    setProducts(newState);
  };

  return (
    <div className="new_order">
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <article className="customer">
        <p id="customer">Customer: {customerOrder.customer}</p>
      </article>
      <section id="buttons_switch">
        <button
          className="waiter_switch"
          id="b_breakfast"
          onClick={getMenuBreakfast}
        >
          Breakfast
        </button>

        <button className="waiter_switch" id="b_meal" onClick={getMenuMeal}>
          Meal
        </button>
      </section>
      <section id="breafkast_meal">
        <div id="order_table">
          {console.log("PRO", products)}
          {products.length != 0 ? (
            <article
              className="table_titles"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p className="table_p">PRICE</p>
              <p className="table_p">PRODUCT</p>
              <p className="table_p">QUANTITY</p>
            </article>
          ) : null}
          {products.map((product) => (
            <tr id="table_row" key={product.id}>
              <BreakfastAndMeal
                product={product}
                parentCallback={updateProducts}
              />
            </tr>
          ))}
        </div>
      </section>
      <section id="button_order">
        <p style={{ fontSize: 35 }}>{total}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="button_confirm_order"
          onClick={handleClick}
        >
          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
