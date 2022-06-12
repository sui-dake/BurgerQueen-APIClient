/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
//import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";
import OrderAPI from "./api/OrderAPI";
import Table from "./Table";
import { useParams } from "react-router-dom";
import { getOrder, updateOrder } from "../../../api/handlingAPI";

export default function Order() {
  //const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState(false);
  const [meal, setMeal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState(false);
  const [customerOrder, setCustomerOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  //NO olvidar poner la fecha y hora en la orden ok y el estado
  console.log("CUSTOMER ORDER", customerOrder);
  console.log("ORDERS", orders);
  console.log("TOTAL", total);
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

  // const newOrder = {
  //   customer: "customer",
  //   total: 20,
  //   id: 0,
  //   summary: [{ orders }],
  // };

  // const handleAPI = () => {
  //   setReady(true);
  //   //navigate("/preparing-order");
  // };
  const handleClick = () => {
    updateOrder(id, customerOrder).then((data) => {
      
    });
  };
  const superiorOrder = () => {
    setCustomerOrder({
      ...customerOrder,
      summary: orders,
      total: total, //no olvidemos wardartmb la hora
    });
  };
  const coso = []
  const alphaOrder = () => {
    // typeof customerOrder.summary === 'object' ? coso.push({...customerOrder, orders}): console.log('  NO ES objeto!!')
    console.log('COSO', coso)
  };

  const getCustomerOrder = () => {
    getOrder(id).then(setCustomerOrder);
  };

  useEffect(() => {
    getCustomerOrder();
  }, [id]);

  useEffect(() => {
    superiorOrder();
    alphaOrder();
  }, [orders]);

  //SOLO GUARDAR CON POST EL CUSTOMER, CON UN MODAL (RECICLADO), ENTONCES
  //AL DAR CLIC AL BOTON NEWCLIENT, SE DESPLIEGA MODAL Y YA QUE DEMOS CONFIRMAR
  //SE CREA LA ORDEN CON ESTE CUSTOMER Y LO QUE VAYA QUERIENDO EL CLIENTE,
  // SE VA PATCHEAR/PUSHEAR A LA ORDEN DEFINIDA PREVIAMENTE.

  return (
    <div className="new_order">
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <article className="customer">
        <p id="customer">Customer: {customerOrder.customer}</p>
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
        {<Table breakfast={breakfast} meal={meal} setOrders={setOrders} setTotal={setTotal}/>}
        {}
      </section>
      <section id="button_order">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="button_confirm_order"
          onClick={handleClick}
        >
          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
