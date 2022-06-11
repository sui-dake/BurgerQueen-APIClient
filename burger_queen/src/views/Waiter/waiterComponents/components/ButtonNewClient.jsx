import { useNavigate } from "react-router-dom";
import "./buttonNewClient.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../../../Admin/adminComponents/modal/Modal";
import CustomerInput from "./CustomerInput";
import { getOrders, postOrder } from "../../../../api/handlingAPI";

export default function ButtonNewClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState("");
  const [current, setCurrent] = useState([]);
  const navigate = useNavigate();
  let customerValue = {
    customer: customer, //customer newOrder.customer
  };
  const handleClick = () => {
    postOrder(customerValue).then((data) => {
      setCurrent(data);
      console.log(data.data.id);
      navigate(`/order/${data.data.id}`)
    });
    
    //   const currentFilter = () =>
    //   current.filter((cust) => cust.customer == customer);
    // customer != [] ? console.log(currentFilter()) : null;
    //    currentFilter();
    //navigate(`/order/${data.data.id}`)
  };

  useEffect(() => {}, []);

  return (
    <div className="container_button_new_client">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_new_client"
        onClick={() => setIsOpen(true)}
      >
        New client +👤
      </motion.button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <CustomerInput
          handleClose={() => setIsOpen(false)}
          setCustomer={setCustomer}
        />
        <button onClick={handleClick}>Send</button>
      </Modal>
    </div>
  );
}
