import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./buttonNewClient.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../../Admin/adminComponents/modal/Modal";
import CustomerInput from "./CustomerInput";
import { postOrder } from "../../../../api/handlingAPI";
import send from "../../../../assets/send.png";

export default function ButtonNewClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState("");
  const [current, setCurrent] = useState([]);
  const navigate = useNavigate();
  let customerValue = {
    customer: customer,
    state: "pending", //customer newOrder.customer
    summary: [
      {
        name: "",
        price: 0,
        quantity: 0,
      },
    ],
    total: 0,
  };
  const handleClick = () => {
    postOrder(customerValue).then((data) => {
      setCurrent(data);
      navigate(`/order/${data.data.id}`);
    });
  };

  return (
    <div className={styles.container_button_new_client}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id={styles.button_new_client}
        onClick={() => setIsOpen(true)}
      >
        New client +👤
      </motion.button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <CustomerInput
          handleClose={() => setIsOpen(false)}
          setCustomer={setCustomer}
        />
        <img id={styles.btn} type="button" src={send} onClick={handleClick} />
      </Modal>
    </div>
  );
}
