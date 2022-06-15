/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./buttonAddEmployee.css";
import Modal from "./modal/Modal";
import { useState } from "react";
import NewAcc from "./NewAcc";

export default function ButtonAddEmployee() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="container_button_add_employee"
      style={{ marginLeft: "80px" }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_add_employee"
        onClick={() => setIsOpen(true)}
      >
        Add Employee +👤
      </motion.button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <NewAcc handleClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
