import "./admin.css";
import { Link, Route, Routes } from "react-router-dom";
import Switch from "./adminComponents/Switch";
import Products from "./adminComponents/Products";
import Employees from "./adminComponents/Employees";

export default function AdminDashboard() {
  return (
    <div className="admin_dashboard">
      <h1>Role: name</h1>
      <p>logout</p>
      <Switch />
      {/* <Routes>
        <Route path="/:id" children={<Products />}/>
        <Route path="/:id" children={<Employees />}/>
      </Routes> */}
      <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
