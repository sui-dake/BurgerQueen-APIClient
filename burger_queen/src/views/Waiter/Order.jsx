import { useNavigate } from "react-router-dom";
import DateTime from "../../components/DateTime";
import "./order.css";
import { motion } from "framer-motion";

export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="new_order">
      <h1>Order</h1>
      <DateTime />
      <input placeholder="Customer"/>
      <motion.button  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_confirm_order"
        onClick={() => navigate("/preparing-order")}
      >
        Confirm order
      </motion.button>
    </div>
  );
}
