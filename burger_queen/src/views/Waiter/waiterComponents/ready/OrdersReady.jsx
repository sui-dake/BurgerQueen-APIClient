import styles from "./ordersReady.module.css";
import { getOrders, updateOrder } from "../../../../api/handlingAPI";
import { useState, useEffect } from "react";

export default function OrdersReady() {
  const [readyOrders, setReadyOrders] = useState([]);
  //const [observer, setObserver] = useState([]);

  const printOrders = () => {
    getOrders().then((data) => {
      setReadyOrders(data.filter((item) => item.state === "ready"));
    });
  };
  const served = (id) => {
    updateOrder(id, { state: "served" }).then(
      setTimeout(() => printOrders(), 500)
    );
  };

  useEffect(() => {
    printOrders();
  }, []);

  // useEffect(() => {
  //   console.count("RT");
  //   setTimeout(() => printOrders(), 1500);
  // },[]);

  return (
    <section className={styles.container_ready}>
      <article className={styles.ready_article}>
        <h1 className={styles.ready_title}>Ready</h1>
        <summary className={styles.container_ready_orders}>
          {readyOrders.map((item) => (
            <section className={styles.print_orders} key={item.id + ""}>
              <h2>{item.customer}</h2>
              {item.summary.map((token) => (
                <p className={styles.print_orders_p} key={`${token.id}`}>
                  {token.quantity + " " + token.name}
                </p>
              ))}
              <img
                type="button"
                style={{ width: "40px", height: "40px" }}
                src="./check.png"
                onClick={() => {
                  served(item.id);
                }}
              />
            </section>
          ))}
        </summary>
      </article>
    </section>
  );
}
