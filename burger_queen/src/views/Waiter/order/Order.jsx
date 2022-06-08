/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";
import OrderAPI from "./api/OrderAPI";

export default function Order() {
  //const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState(false);
  const [meal, setMeal] = useState(false);
  const [customer, setCustomer] = useState("");
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState(false);
  //NO olvidar poner la fecha y hora en la orden ok

  const handleBreakfast = () => {
    if (breakfast == true) {
      setBreakfast(true);
    } else if (breakfast == false) {
      setBreakfast(true), setMeal(false);
    }
  };
  const handleMeal = () => {
    if (meal == true) {
      setMeal(true);
    } else {
      setMeal(true), setBreakfast(false);
    }
  };
  const handleChange = (e) => {
    setCustomer(e.target.value);
  };
  const newOrder = [];

  const updateOrder = (order, customer) => {
    orders.map((item) => {
      order ? newOrder.push({...item, customer}) : null;
    });
  };
  useEffect(() => {
    updateOrder(orders, customer);
  });

  const handleAPI = () => {
    setReady(true);
  };

  return (
    <div className="new_order">
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <article className="customer">
        <p id="customer">Customer:</p>
        <input id="input_customer" onChange={handleChange} />
      </article>
      <section id="buttons_switch">
        <button
          className="waiter_switch"
          id="b_breakfast"
          onClick={handleBreakfast}
        >
          Breakfast
        </button>

        <button className="waiter_switch" id="b_meal" onClick={handleMeal}>
          Meal
        </button>
      </section>
      <section id="breafkast_meal">
        {
          <BreakfastAndMeal
            breakfast={breakfast}
            meal={meal}
            setOrders={setOrders}
          />
        }
        {}
      </section>
      <section id="button_order">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="button_confirm_order"
          onClick={handleAPI}
        >
          {ready
            ? <OrderAPI newOrder={newOrder} /> 
            : null}

          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
