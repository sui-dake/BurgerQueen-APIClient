import Date from '../../components/Date'
import SingOut from '../../components/SingOut'
import './waiter.css'
import Ready from './waiterComponents/ready/OrdersReady'

export default function WaiterDashboard (){
    return(
        <div className='waiter_dashboard'>
              <Date />
              <SingOut/>
              <Ready/>
        </div>
    )
}