import SingOut from "../../components/SingOut";
import Coincidence from "./Coincidence";
import NewAcc from "./NewAcc";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container_home">
      {/* <NewAcc />
      <SingOut />
      <Coincidence /> */}
      <Link to="/waiter-dashboard" style={{ margin: "5px" }}>
        Waiter Dashboard
      </Link>
      <Link to="/admin-dashboard" style={{ margin: "5px" }}>
        Admin Dashboard
      </Link>
      <Link to="/chef-dashboard" style={{ margin: "5px" }}>
        Chef Dashboard
      </Link>
    </div>
  );
}
