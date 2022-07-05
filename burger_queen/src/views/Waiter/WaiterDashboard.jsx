import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import User from "../../components/User";
import ButtonNewClient from "./waiterComponents/components/ButtonNewClient";
import "./waiter.css";
import PendingOrders from "./waiterComponents/pending/PendingOrders";
import OrdersReady from "./waiterComponents/ready/OrdersReady";

export default function WaiterDashboard() {
  return (
    <div className="waiter_dashboard">
      <main className="singout_waiter">
        <SingOut />
      </main>
      <header id="header_waiter">
        <DateTime />
        <User />
      </header>
      <section id="main_waiter">
        <OrdersReady />
        <PendingOrders />

        <ButtonNewClient />
      </section>
      
    </div>
  );
}
