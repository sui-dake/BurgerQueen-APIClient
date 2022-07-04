/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import AdminDashboard from "./views/Admin/AdminDashboard";
import WaiterDashboard from "./views/Waiter/WaiterDashboard";
import Order from "./views/Waiter/order/Order";
import PreparingOrder from "./views/Waiter/Preparing";
import ChefDashboard from "./views/Chef/ChefDashboard";
import Employees from "./views/Admin/adminComponents/Employees";
import Products from "./views/Admin/adminComponents/Products";
import Home from "./views/Login/Home";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Header from "./components/Header";

function App() {
  //  const roll=""
  //   const elementHome=()=>{
  //     if(roll==="mesero"){
  //       return <Employees></Employees>
  //     }else <div>hola</div>
  //   }

  return (
    <div className="back">
      <div className="box">
        <div className="circle-up">
          <Header />
        </div>

        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              {/* <Route path='/admin-dashboard/products' element={<Products />}/>
            <Route path='/admin-dashboard/employees' element={<Employ
          </Route> */}
              <Route path="/waiter-dashboard" element={<WaiterDashboard />} />
              <Route path="/order/:id" element={<Order />} />
              <Route path="/preparing-order" element={<PreparingOrder />} />
              <Route path="/chef-dashboard" element={<ChefDashboard />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;

/// uid: 123d!@Dew123
/// email: nami@
/// rol:  admin
/// constrase;a: admin si
