

// import PaymentForm from './Myproject/paymentform/PaymentForm'
// import Router from 'react-Router-dom'
// import HomePage from './Myproject/Homepage/HomePage'
// import SignUp from './Myproject/Signup-form/Signup'
import { ChakraProvider } from '@chakra-ui/react';
import ApplicationRoutes from './Myproject/ApplicationRoutes'
// import Dummy from './Myproject/dummy/dummy'

// import Login from './Myproject/Login-form/Login'

function App() {
  return (
    <div className="App">
      {/* <Dummy /> */}
      <ApplicationRoutes/>     
      {/* <HomePage/> */}
      {/* <SignUp/> */}
           
    </div>


  );
}

export default App;
