/* eslint-disable react/react-in-jsx-scope */
import styles from "./pendingOrders.module.css";
import { getOrders } from "../../../../api/handlingAPI";
import { useState, useEffect } from "react";

export default function PendingOrders() {
  const [pendingOrders, setPendingOrders] = useState([]);
  //const [observer, setObserver] = useState([]);

  const printOrders = () => {
    getOrders().then((data) => {
      setPendingOrders(data);
    });
  };

  useEffect(() => {
    printOrders();
  }, []);
  // useEffect(() => {
  //   console.count("RT");
  //   setTimeout(() => printOrders(), 1500);
  // },[]);

  return (
    <section className={styles.container_pending}>
      <article className={styles.pending_article}>
        <h1 className={styles.pending_title}>Pending</h1>
        <summary className={styles.container_pending_orders}>
          {pendingOrders.map((item) => (
            <section className={styles.print_orders} key={item.id + ""}>
              <h2>{item.customer}</h2>
              {item.summary.map((token) => (
                <p className={styles.print_orders_p} key={`${token.id}`}>
                  {token.quantity + " " + token.name}
                </p>
              ))}
            </section>
          ))}
        </summary>
      </article>
    </section>
  );
}
