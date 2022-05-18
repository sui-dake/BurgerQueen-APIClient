import './admin.css'
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className='admin_dashboard'>
      <h1 >Admin Dashboard: UNDER CONSTRUCTION</h1>
      <img id="in_contruction" src="./in-construction.png" />
      <Link to={"/chef-dashboard"} style={{margin: '5px'}}> Chef Dashboard </Link>
      <Link to={"/order"} style={{margin: '5px'}}> Order </Link>
      <Link to={"/waiter-dashboard"} style={{margin: '5px'}}> Waiter Dashboard </Link>
    </div>
  );
}

