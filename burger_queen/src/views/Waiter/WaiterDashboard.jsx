import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import ButtonNewClient from "./components/ButtonNewClient";
import "./waiter.css";
import Ready from "./waiterComponents/ready/OrdersReady";

export default function WaiterDashboard() {
  return (
    <div className="waiter_dashboard">
      <DateTime />
      <SingOut />
      <Ready />
      <ButtonNewClient/>
    </div>
  );
}
