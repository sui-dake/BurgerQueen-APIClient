/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./buttonAddEmployee.css";

export default function ButtonAddEmployee() {
  const navigate = useNavigate();
  return (
    <div
      className="container_button_add_employee"
      style={{ marginLeft: "80px" }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_add_employee"
        onClick={() => console.log("modal")}
      >
        Add Employee +👤
      </motion.button>
    </div>
  );
}
