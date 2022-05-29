import "./chef.css";
import User from "../../components/User";
import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import ApiProducts from "../../api/ApiProducts";

export default function ChefDashboard() {
  return (
    <div className="chef_dashboard">
      <main className="singout">
        <SingOut />
      </main>
      <section id="date_user">
        <DateTime />
        <User />
      </section>
      <figure className="chef">
        <h1>Chef under construction 🛠️</h1>
        <img id="chef" src="./Chef.png" />
      </figure>
      <ApiProducts />
    </div>
  );
}
