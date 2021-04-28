import  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  signupstyle from './Signup.module.css';
import Button from '../Button';
import Inputfield from '../Login-form/InputField';
import pic from '../Images/avatar.png';
import { Checkbox } from "@chakra-ui/react"



function SignUp() {
    const history = useHistory()
    const [values, setvalues] = useState({})
  
  
    const onchange = (e) => {
      setvalues({...values, [e.target.name]: e.target.value})
    }
  
    const gotologin = (e) => {
      e.preventDefault();
      history.push("/")
    }
  
    function submit(e){
      e.preventDefault();
      console.log(values);

      fetch('http://localhost:5000/api/v1/signup', 
      {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
  
  
        
      },err=>console.log(err))
  
    }

    // function PasswordInput() {
    //   const [show, setShow] = React.useState(false)
    //   const handleClick = () => setShow(!show)
    
    //   return (
    //     <InputGroup size="md">
    //       <Input
    //         pr="4.5rem"
    //         type={show ? "text" : "password"}
    //         placeholder="Enter password"
    //       />
    //       <InputRightElement width="4.5rem">
    //         <Button h="1.75rem" size="sm" onClick={handleClick}>
    //           {show ? "Hide" : "Show"}
    //         </Button>
    //       </InputRightElement>
    //     </InputGroup>
    //   )
    // }

    return (
        <div className={signupstyle.maindiv}>
        <div className={signupstyle.formdiv}>
            <div className={signupstyle.leftdiv}>
                <nav>
                    Welcome to the one stop shop E-commerce site
              </nav>
                <p className={signupstyle.welcome}>To shop with us, <br /> Signup on the form on your right with your personal details, <br /> And subcribe to our various platforms<br /><br /> Thank You.</p>
            </div>

            <div className={signupstyle.rightdiv}>
                <img className={signupstyle.avatar} src={pic} alt={""}/> 
                <section >  CREATE AN ACCOUNT</section>
                <div>   
                    <Inputfield  className={signupstyle.input} type='text'   placeholder='First Name'  onchange={onchange} />
                    <Inputfield  className={signupstyle.input} type='text'   placeholder='Last Name'  onchange={onchange} />
                    <Inputfield className={signupstyle.input}  type='email'   placeholder='Email Eg. Kaynex-look@gmail.com'  onchange={onchange} />
                    <Inputfield  className={signupstyle.input} type='password'   placeholder='Password'  onchange={onchange} />
                    <Inputfield  className={signupstyle.input} type='password'   placeholder='Confirm password' onchange={onchange} />

                </div>
                <div className={signupstyle.bottomdiv}>
                    <Button text='Sign up' classname={signupstyle.button}   onclick={submit}  />
                    <Button text="Login" classname={signupstyle.buttonlogin} onclick={gotologin}/>
              </div>
              {/* <div className={signupstyle.checkboxdiv}>
                <Checkbox defaultIsChecked>  I agree to the terms of the User </Checkbox>
              </div> */}
            </div>
        </div>
    </div>
);
}
export default SignUp;