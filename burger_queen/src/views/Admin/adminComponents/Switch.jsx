import { Link, Route, Routes, useParams } from "react-router-dom";
import Products from "./Products";
import Employees from "./Employees";
import "./switch.css";

export default function Switch() {
  return (
    <main className="admin_container">
      <object id="switch">
        <button className="admin_switch" id="b_employees">
          Employees
        </button>
        <button className="admin_switch" id="b_products">
          Products
        </button>
      </object>

      <figure className="admin_dashboard">
      
        <Employees />
      </figure>
    </main>
  );
}
