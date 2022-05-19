import Login from "../views/Login/Login";

export default function Switch() {
  const options = () =>{
    <Login />
  }
    return (
      <figure className='admin_dashboard'>
        <p>Role: name</p>
        <p>logout</p>
        <button className="admin_switch" onClick={()=>console.log('employee')}>Employees</button>
        <button className="admin_switch" onClick={()=>console.log('product')}>Products</button>
        {/* <Link to={"/chef-dashboard"} style={{margin: '5px'}}> Chef Dashboard </Link>
        <Link to={"/order"} style={{margin: '5px'}}> Order </Link>
        <Link to={"/waiter-dashboard"} style={{margin: '5px'}}> Waiter Dashboard </Link> */}
      </figure>
    );
  }