import {Switch, Route} from 'react-router-dom'
import Signup from './Signup-form/Signup'
import Login from "./Login-form/Login"
import HomePage from './Homepage/HomePage'



const ApplicationRoutes = () => {
    return(
        <Switch>
             <Route exact path="/" component={Login}/>
             <Route exact path="/signup" component={Signup} />
             
             <Route exact path="/HomePage" component={HomePage} />
             {/* <Route component={Homepage}/>  */}
              {/* {message: if a user enters a wrong crendential, redirect to homepage. } */}
      </Switch> 
    )
}
export default ApplicationRoutes;