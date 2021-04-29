import {Switch, Route} from 'react-router-dom'
import Signup from './Signup-form/Signup'
import Login from "./Login-form/Login"
import HomePage from './Homepage/HomePage'
import PaymentForm from './paymentform/PaymentForm'
import Navbar from './Navbar/Navbar'
import Cards from './Cards/Cards'
import ProductList from './Productlist/ProductList'



const ApplicationRoutes = () => {
    return(
        <Switch>
             <Route exact path="/" component={HomePage}/>
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/login" component={Login}/>  
             <Route exact path="/cards" component={Cards}/>
             < Route exact path="/paymentform" component={PaymentForm}/> 
             < Route exact path="/productlist" component={ ProductList}/>
             < Route exact path="/navbar" component={ Navbar} />
      </Switch> 
    )
}
export default ApplicationRoutes;