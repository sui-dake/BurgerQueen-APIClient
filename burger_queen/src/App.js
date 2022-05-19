import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import AdminDashboard from "./views/Admin/AdminDashboard";
import WaiterDashboard from "./views/Waiter/WaiterDashboard";
import Order from "./views/Waiter/Order";
import PreparingOrder from "./views/Waiter/Preparing";
import ChefDashboard from './views/Chef/ChefDashboard';
import Employees from "./views/Admin/adminComponents/Employees";
import Products from "./views/Admin/adminComponents/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>
            {/* <Route path='/admin-dashboard/products' element={<Products />}/>
            <Route path='/admin-dashboard/employees' element={<Employees />}/>
          </Route> */}
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
