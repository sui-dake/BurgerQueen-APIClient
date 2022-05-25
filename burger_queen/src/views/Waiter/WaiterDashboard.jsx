import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import User from "../../components/User";
import ButtonNewClient from "./waiterComponents/components/ButtonNewClient";
import "./waiter.css";
import Ready from "./waiterComponents/ready/OrdersReady";
import { Link } from "react-router-dom";

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
      <section id='main_waiter'>
        <Ready />
        <ButtonNewClient />
      </section>
      {/* <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link> */}
    </div>
  );
}
