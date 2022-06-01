/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./buttonAddProduct.css";

export default function ButtonAddProduct() {
 // const navigate = useNavigate();
  return (
    <div className="container_button_add_product">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_add_product"
        onClick={() => console.log("modal")}
      >
        Add Product ➕
      </motion.button>
    </div>
  );
}