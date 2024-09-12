/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./buttonAddProduct.css";
import Modal from "./modal/Modal";
import { useState } from "react";
import AddProduct from './AddProduct'

export default function ButtonAddProduct() {
  const [isOpen, setIsOpen] = useState(false);
 // const navigate = useNavigate();
  return (
    <div className="container_button_add_product">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_add_product"
        onClick={() => setIsOpen(true)}
      >
        Add Product ➕
      </motion.button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <AddProduct
          handleClose={() => setIsOpen(false)}
          
        />
        <img id="btn-send" type="button"  />
      </Modal>
    </div>
  );
}