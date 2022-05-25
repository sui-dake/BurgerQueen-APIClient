import "./admin.css";
import { Link, Route, Routes } from "react-router-dom";
import Switch from "./adminComponents/Switch";
import Products from "./adminComponents/Products";
import Employees from "./adminComponents/Employees";
import ButtonAddEmployee from "./adminComponents/ButtonAddEmployee";
import OrderTable from "./../Waiter/waiterComponents/components/OrderTable";
//import { useAuth } from './../context/authContext'

export default function AdminDashboard() {
  return (
    <div className="admin_dashboard">
      <h1></h1>
      <p></p>
      <Switch />
      <ButtonAddEmployee />

      <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
