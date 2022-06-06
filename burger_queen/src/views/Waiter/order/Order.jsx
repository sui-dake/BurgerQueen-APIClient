/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import Breakfast from "../waiterComponents/components/Breakfast";
import Meal from "../waiterComponents/components/Meal";

export default function Order() {
  const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState(false);
  const [meal, setMeal] = useState(false);

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

  return (
    <div className="new_order">
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <article className="customer">
        <p id="customer">Customer:</p>
        <input id="input_customer" />
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
        {breakfast ? <Breakfast /> : null}
        {meal ? <Meal /> : null}
      </section>
      <section id="button_order">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="button_confirm_order"
          onClick={() => navigate("/preparing-order")}
        >
          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
