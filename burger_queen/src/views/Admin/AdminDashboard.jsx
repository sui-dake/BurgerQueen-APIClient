/* eslint-disable react/react-in-jsx-scope */
import "./admin.css";
import { Link, Route, Routes } from "react-router-dom";
import Switch from "./adminComponents/Switch";
import Products from "./adminComponents/Products";
import Employees from "./adminComponents/Employees";
import ButtonAddEmployee from "./adminComponents/ButtonAddEmployee";
import SingOut from "../../components/SingOut";

export default function AdminDashboard() {
  return (
    <div>
      <main className="singout" style={{ marginRight: "70px" }}>
        <SingOut />
      </main>
      <div className="admin_dashboard">
        <Switch />
        <ButtonAddEmployee />
      </div>
    </div>
  );
}
