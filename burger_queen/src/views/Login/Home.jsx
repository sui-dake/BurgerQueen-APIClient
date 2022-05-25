import { Link } from "react-router-dom";
import { useState } from "react";
import ChefDashboard from "../Chef/ChefDashboard";
import WaiterDashboard from "../Waiter/WaiterDashboard";
import AdminDashboard from "../Admin/AdminDashboard";
import User from "../../components/User";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { user, roles } = useAuth();
  let component = null;
  let name = user.displayName;

  console.log(roles);
  if (roles == "Manager") {
    component = <AdminDashboard />;
  } else if (roles == "Chef") {
    component = <ChefDashboard />;
  } else if (roles == "Waiter/waitress") {
    component = <WaiterDashboard />;
  }

  return (
    <div className="container_home">
      {/* <User /> */}
      {component}
      {/* <Link to="/waiter-dashboard" style={{ margin: "5px" }}>
        Waiter Dashboard
      </Link>
      <Link to="/admin-dashboard" style={{ margin: "5px" }}>
        Admin Dashboard
      </Link>
      <Link to="/chef-dashboard" style={{ margin: "5px" }}>
        Chef Dashboard
      </Link> */}
    </div>
  );
}
