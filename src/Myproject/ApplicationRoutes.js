import {Switch, Route} from 'react-router-dom'
import Signup from './Signup-form/Signup'
import Login from "./Login-form/Login"
import HomePage from './Homepage/HomePage'
import PaymentForm from './paymentform/PaymentForm'
import HomePage2 from './Homepage/HomePage2'
import Navbar from './Navbar/Navbar'



const ApplicationRoutes = () => {
    return(
        <Switch>
             {/* <Route exact path="/" component={HomePage}/>
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/login" component={Login}/>  */}

             {/* <PaymentForm/> */}

             {/* <HomePage2/>  */}
             <Navbar/>
             {/* <Route exact path="/HomePage" component={HomePage} />
             {/* <Route component={Homepage}/>  */}
              {/* {message: if a user enters a wrong crendential, redirect to homepage. } */}
      </Switch> 
    )
}
export default ApplicationRoutes;