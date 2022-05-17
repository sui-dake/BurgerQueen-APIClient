import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import WaiterDashboard from "./components/Waiter/WaiterDashboard";
import Order from "./components/Waiter/Order";
import PreparingOrder from "./components/Waiter/Preparing";
import ChefDashboard from "./components/Chef/ChefDashboard";

function App() {
  return (
    <div className="App">
       <h1>hi</h1>
      <BrowserRouter>
       
        <Routes>
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
