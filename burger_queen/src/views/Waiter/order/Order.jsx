  /* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DateTime from "../../../components/DateTime";
import User from "../../../components/User";
import "./order.css";
import { motion } from "framer-motion";
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";
import { useParams } from "react-router-dom";
import {
  getOrder,
  updateOrder,
  getAllProducts,
} from "../../../api/handlingAPI";

export default function Order() {
   const navigate = useNavigate();

  const [customerOrder, setCustomerOrder] = useState([]);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [meal, setMeal] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({
    ...customerOrder,
    summary: [],
    total: total,
    //no olvidemos wardartmb la hora
  });

  const getMenuBreakfast = () => {
    setMenu(true);
  };
  const getMenuMeal = () => {
    setMenu(false);
  };

  const getCustomerOrder = () => {
    getOrder(id).then(setCustomerOrder);
  };

  useEffect(() => {
    getCustomerOrder();
  }, [id]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setBreakfast(
        products
          .filter((tkn) => tkn.type == "Breakfast")
          .map((item) => {
            return { ...item, quantity: 0 };
          })
      );
      setMeal(
        products
          .filter((tkn) => tkn.type == "Meal")
          .map((item) => {
            return { ...item, quantity: 0 };
          })
      );
    }
  }, [products]);

  const updateProducts = (product, action) => {
    let index = products.findIndex((item) => {
      return item.id == product.id;
    });

    const newState = breakfast.map((obj) => {
      if (obj.id === product.id) {
        const currentQuantity = product.quantity;
        if (
          (action == "Decrement" && currentQuantity != 0) ||
          action == "Increment"
        ) {
          const newQuantity =
            action == "Increment" ? currentQuantity + 1 : currentQuantity - 1;
          setTotal(
            action === "Increment"
              ? total + product.price
              : total - product.price
          );
          return {
            ...obj,
            quantity: newQuantity,
          };
        }
      }
      return obj;
    });
    setBreakfast(newState);

    const newStateMeal = meal.map((obj) => {
      if (obj.id === product.id) {
        const currentQuantity = product.quantity;
        if (
          (action == "Decrement" && currentQuantity != 0) ||
          action == "Increment"
        ) {
          const newQuantity =
            action == "Increment" ? currentQuantity + 1 : currentQuantity - 1;
          setTotal(
            action === "Increment"
              ? total + product.price
              : total - product.price
          );
          return {
            ...obj,
            quantity: newQuantity,
          };
        }
      }
      return obj;
    });
    setMeal(newStateMeal);
  };

  const updateState = () => {
    const beakfastAndMeal = breakfast.concat(meal).filter((item) => item.quantity > 0);
    console.log("BE EME", beakfastAndMeal);
    updateOrder(id, { summary: beakfastAndMeal, total: total });
    navigate("/preparing-order");
  };

  useEffect(() => {
    //updateState();
  }, [total]);
  console.log("FINAL", order);
  
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
          onClick={getMenuBreakfast}
        >
          Breakfast
        </button>

        <button className="waiter_switch" id="b_meal" onClick={getMenuMeal}>
          Meal
        </button>
      </section>
      <section id="breafkast_meal">
        <div id="order_table">
          {products.length != 0 ? (
            <article
              className="table_titles"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p className="table_p">PRICE</p>
              <p className="table_p">PRODUCT</p>
              <p className="table_p">QUANTITY</p>
            </article>
          ) : null}
          {menu === true
            ? breakfast.map((product) => (
                <tr id="table_row" key={product.id}>
                  <BreakfastAndMeal
                    product={product}
                    parentCallback={updateProducts}
                  />
                </tr>
              ))
            : menu === false
            ? meal.map((product) => (
                <tr id="table_row" key={product.id}>
                  <BreakfastAndMeal
                    product={product}
                    parentCallback={updateProducts}
                  />
                </tr>
              ))
            : null}

          {/* {products.map((product) => (
             <tr id="table_row" key={product.id}>
               <BreakfastAndMeal
                 product={product}
                 parentCallback={updateProducts}
               />
             </tr>
           ))} */}
        </div>
      </section>
      <section id="button_order">
        <p style={{ fontSize: 35 }}> Total: ${total}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="button_confirm_order"
          onClick={updateState}
        >
          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
