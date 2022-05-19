import './admin.css'
import { Link } from 'react-router-dom';
import Switch from '../../components/Switch';


export default function AdminDashboard() {

  return (
    <div className='admin_dashboard'>
      <h1>Role: name</h1>
      <p>logout</p>
      <Switch/>

      {/* <Link to={"/chef-dashboard"} style={{margin: '5px'}}> Chef Dashboard </Link>
      <Link to={"/order"} style={{margin: '5px'}}> Order </Link>
      <Link to={"/waiter-dashboard"} style={{margin: '5px'}}> Waiter Dashboard </Link> */}
    </div>
  );
}
