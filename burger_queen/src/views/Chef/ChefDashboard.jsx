import "./chef.css";
import User from "../../components/User";
import Role from "../../components/Role";
import NewAcc from "../Login/NewAcc";
import { Link } from "react-router-dom";

export default function ChefDashboard() {
  return (
    <div className="admin_dashboard">
      <h1>Chef Dashboard</h1>
      <User />
      <Role/>
      <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
