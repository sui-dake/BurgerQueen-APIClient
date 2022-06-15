/* eslint-disable react/react-in-jsx-scope */
import "./pendingOrders.css";
import { getOrders } from "../../../../api/handlingAPI";
import { useState, useEffect } from "react";

export default function PendingOrders() {
  const [pendingOrders, setPendingOrders] = useState([]);

  const printOrders = () => {
    getOrders().then((data) => {
      setPendingOrders(data);
    });
  };
  useEffect(() => {
    printOrders();
  }, []);

  return (
    <section>
      <article className="pending_article">
        <h1 style={{ marginLeft: "80px" }}>Pending orders</h1>
        <summary className="container_pending_orders">
          {pendingOrders.map((item, key) => (
            <section className="print-orders" key={key}>
              <h2 style={{ margin: "10px" }}>{item.customer}</h2>
              {item.summary.map((token) => (
                <p key={item.id}>{token.quantity + " " + token.name}</p>
              ))}
            </section>
          ))}
        </summary>
      </article>
    </section>
  );
}
