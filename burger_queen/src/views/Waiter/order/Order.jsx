/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
//import { useNavigate } from "react-router-dom";
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
  // const navigate = useNavigate();

  const [customerOrder, setCustomerOrder] = useState([]);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(null);
  const [b, setB] = useState([]);
  const [m, setM] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({
    ...customerOrder,
    summary: [],
    //no olvidemos wardartmb la hora
  });
  //NO olvidar poner la fecha y hora en la orden ok y el estado
  // console.log("ORDERS", orders);

  //////////////// CONDITIONALS //////////////////////////////
  // if (b) {
  //   return products
  //     .filter((item) => item.type === "Breakfast")
  //     .map((product) => (
  //       <tr id="table_row" key={product.id}>
  //         <BreakfastAndMeal product={product} parentCallback={updateProducts} />
  //       </tr>
  //     ));
  // }
  // if (m) {
  //   return products
  //     .filter((item) => item.type === "Meal")
  //     .map((product) => (
  //       <tr id="table_row" key={product.id}>
  //         <BreakfastAndMeal product={product} parentCallback={updateProducts} />
  //       </tr>
  //     ));
  // }
  // const getMenuBreakfast = () => {
  //   if(b === true){
  //     setB(true), setM(false)
  //   }
  // };
  // const getMenuMeal = () => {
  //   if(m === true){
  //     setM(true), setB(false)
  //   }
  // };
  ///////////////////////////////////////////
  // const breakfast = products.filter((tkn) => tkn.type == "Breakfast");
  // const meal = products.filter((tkn) => tkn.type == "Meal");

  const getMenuBreakfast = () => {
    setMenu(true);
  };
  const getMenuMeal = () => {
    setMenu(false);
  };
  const handleClick = () => {
    // updateOrder(id, order).then((data) => {});
    //navigate("/preparing-order");
  };

  const getCustomerOrder = () => {
    getOrder(id).then(setCustomerOrder);
  };

  useEffect(() => {
    getCustomerOrder();
  }, [id]);

  useEffect(() => {
    getAllProducts().then(setProducts);
    // data = data.map((item) => {
    //   return { ...item, quantity: 0 };
    // });
    //);
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      setB(
        products
          .filter((tkn) => tkn.type == "Breakfast")
          .map((item) => {
            return { ...item, quantity: 0 };
          })
      );
      setM(
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

    // useEffect(() => {
    //   if (quantity > 0) {
    //  updateState();
    //     updateTotal();
    //   }
    // }, [quantity]);

    const newState = b.map((obj) => {
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
    setB(newState);
    //    console.log("BREAKS", b);

    const newStateMeal = m.map((obj) => {
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
    setM(newStateMeal);
  };
  //console.log("MEALS", m);

  const updateState = () => {
    // console.log("toda la wea", bm);
    // bm.map((item) => {
    //   console.log("sodasss", item, typeof(item));
    //   setOrder({
    //     ...order,

    //     summary: [
    //       ...order.summary.filter((self) => self.name !== item.name),

    //       { name: item.name, price: item.price, quantity: item.quantity },
    //     ],
    //     total: total,
    //   });
    // });

    const bm = b.concat(m).filter((item) => item.quantity > 0);
    console.log("BE EME", bm);
    updateOrder(id, { summary: bm });
  };
  // console.log('CONCAT', b.concat(m))

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
            ? b.map((product) => (
                <tr id="table_row" key={product.id}>
                  <BreakfastAndMeal
                    product={product}
                    parentCallback={updateProducts}
                  />
                </tr>
              ))
            : menu === false
            ? m.map((product) => (
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
          //onClick={handleClick}
          onClick={updateState}
        >
          Confirm order
        </motion.button>
      </section>
    </div>
  );
}
