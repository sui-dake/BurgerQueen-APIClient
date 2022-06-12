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
    <div className="container_pending_orders">
      <h1>Pending orders</h1>
      {pendingOrders.map((item, key) => (
        <section style={{background: 'gray'}}key={key}>
          <p>{item.customer}</p>
          {item.summary.map((token, key)=>(
            <p key={key}>{token.name +' '+ token.quantity}</p>
          )
          )}
        </section>
      ))}
    </div>
  );
}
