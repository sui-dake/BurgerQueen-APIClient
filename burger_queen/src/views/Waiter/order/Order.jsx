/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import Table from "./Table";
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
  const [ready, setReady] = useState(false);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState({
    ...customerOrder,
    summary: [],
    total: [], //no olvidemos wardartmb la hora
  });
  console.log(orders);
  //NO olvidar poner la fecha y hora en la orden ok y el estado
  console.log("CUSTOMER ORDER", customerOrder);
  // console.log("ORDERS", orders);

  const getMenuBreakfast = () => {
    getBreakfast().then((data) => {
      setProducts(data);
    });
  };

  const getMenuMeal = () => {
    getMeal().then((data) => {
      setProducts(data);
    });
  };

  const handleClick = () => {
    console.log(orders);
    updateOrder(id, orders).then((data) => {});
    //navigate("/preparing-order");
  };

  const getCustomerOrder = () => {
    getOrder(id).then(setCustomerOrder);
  };

  useEffect(() => {
    getCustomerOrder();
  }, [id]);

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
        {
          <Table
            products={products}
            orders={orders}
            setOrders={setOrders}
            customerOrder={customerOrder}
            setCustomerOrder={setCustomerOrder}
          />
        }
        {}
      </section>
      <section id="button_order">
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
