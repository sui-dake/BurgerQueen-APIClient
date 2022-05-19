import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import AdminDashboard from "./views/Admin/AdminDashboard"
import WaiterDashboard from "./views/Waiter/WaiterDashboard";
import Order from "./views/Waiter/Order";
import PreparingOrder from "./views/Waiter/Preparing";
import ChefDashboard from "./views/Chef/ChefDashboard";
import Home from "./views/Login/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/waiter-dashboard" element={<WaiterDashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/preparing-order" element={<PreparingOrder />} />
          <Route path="/chef-dashboard" element={<ChefDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
