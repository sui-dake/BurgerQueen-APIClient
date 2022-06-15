/* eslint-disable react/react-in-jsx-scope */
import "./admin.css";
import { useState } from "react";
import Products from "./adminComponents/Products";
import Employees from "./adminComponents/Employees";
import SingOut from "../../components/SingOut";
import Modal from "./adminComponents/modal/Modal";
import DateTime from "../../components/DateTime";
import User from "../../components/User";

export default function AdminDashboard() {
  const [employee, setEmployee] = useState(false);
  const [product, setProduct] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleEmployee = () => {
    if (true) {
      setEmployee(true), setProduct(false);
    }
  };

  const handleProduct = () => {
    if (true) {
      setProduct(true), setEmployee(false);
    }
  };

  return (
    <div className="waiter_dashboard">
      <main className="singout_waiter">
        <SingOut />
      </main>
      <header id="header_waiter">
        <DateTime />
        <User />
      </header>
      <div className="admin_dashboard">
        <object id="switch">
          <button
            className="admin_switch"
            id="b_employees"
            onClick={handleEmployee}
          >
            Employees
          </button>
          <button
            className="admin_switch"
            id="b_products"
            onClick={handleProduct}
          >
            Products
          </button>
        </object>
        {employee && <Employees />}
        {product && <Products />}
      </div>
    </div>
  );
}
