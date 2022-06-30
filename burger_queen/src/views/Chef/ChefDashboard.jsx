/* eslint-disable react/react-in-jsx-scope */
import styles from "./chef.module.css";
import User from "../../components/User";
import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import { getOrders } from "../../api/handlingAPI";
import { useEffect, useState } from "react";

export default function ChefDashboard() {
  const [ordersChef, setOrdersChef] = useState([]);

  const printOrdersChef = () => {
    getOrders().then((data) => {
      setOrdersChef(data);
    });
  };

  useEffect(() => {
    printOrdersChef();
  }, []);

  return (
    <div className={styles.chef_dashboard}>
      <main className={styles.singout}>
        <SingOut />
      </main>
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <summary>
        {ordersChef.map((order) => (
          <div className={styles.chef} key={order.id}>
            <section className={styles.container_orders}>
            <h1 className={styles.print_orders}>{order.customer}</h1>
            {order.summary.map((token) => (
              <p className={styles.print_orders} key={`${token.id}`}> {token.quantity + " " + token.name}</p>
            ))}
            </section>
          </div>
        ))}
      </summary>
    </div>
  );
}
