/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import DateTime from "../../components/DateTime";
import User from "../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import OrderTable from "./waiterComponents/components/OrderTable";

export default function Order() {
  const navigate = useNavigate();
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
        <button className="waiter_switch" id="b_breakfast">
          Breakfast
        </button>
        <button className="waiter_switch" id="b_meal">
          Meal
        </button>
      </section>
      <section style={{ margin: "120px" }}>
        <OrderTable />
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
