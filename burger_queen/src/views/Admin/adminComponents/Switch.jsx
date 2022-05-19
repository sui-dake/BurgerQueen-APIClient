import { Link, Route, Routes, useParams } from "react-router-dom";
import Login from "../../Login/Login";
import Products from "./Products";
import Employees from "./Employees";


export default function Switch() {
  const options = () =>{
    <Login />
  }
    return (
      <figure className='admin_dashboard'>
        <p>Role: name</p>
        <p>logout</p>
        
        <Link to='/admin-dashboard/employees'><button className="admin_switch" onClick={()=>console.log('employee')}>Employees</button></Link>
        <Link to='/admin-dashboard/products'><button className="admin_switch" onClick={()=>console.log('product')}>Products</button></Link>
        
          {/* <Routes>
            <Route path="/admin-dashboard/products" children={<Products />}/>
            <Route path="/admin-dashboard/employees" children={<Employees />}/>
          </Routes> */}
        

        {/* <Routes>
          <Route path="/:id" children={<Product />} />
        </Routes> */}
      </figure>
    );
  }

  // function Product() {
    
  //   let { id } = useParams();

  //   return (
  //     <div>
  //       <h3>ID: {id}</h3>
  //     </div>
  //   );
  //   }