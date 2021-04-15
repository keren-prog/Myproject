import React, { useState } from 'react';
import './Signup.css';
import Button from '../button';
import Inputfield from '../Login-form/InputField';
import pic from '../Images/avatar.png';
import Checkbox from '../Checkbox';
import { useHistory } from 'react-router-dom';


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
    }
    return (
        <div className='maindiv'>
        <div className='formdiv'>
            <div className='leftdiv'>
                <nav>
                    Welcome back
              </nav>
                <p className="welcome">Are you new?, <br />To join our page, <br />Signup on the form on your right with your personal details. <br /><br /> Thank You.</p>
            </div>

            <div className='rightdiv'>
                {/* <img className='avatar' src={pic}> alt={""}/> */}
                <section >  CREATE AN ACCOUNT</section>
                <div >
                    <Inputfield  className='input' type='text' label="Firstname" name="firstname" placeholder='First Name' marginBottom={10} onchange={onchange} />
                    <Inputfield  className='input' type='text' label="Lastname" name="lastname" placeholder='Last Name' marginBottom={10} onchange={onchange} />
                    <Inputfield  className='input' type='text' placeholder='Kaynex-look enterprise' marginBottom={10} onchange={onchange} />
                    <Inputfield className='input'  type='email' label="Email" name="email"  placeholder='Eg. Kaynex-look@gmail.com' marginBottom={10} onchange={onchange} />
                    <Inputfield  className='input' type='password' label="Password" name="password" placeholder='Password' marginBottom={10} onchange={onchange} />
                    <Inputfield  className='input' type='password' label="Confirm Password" name="confirmpassword" placeholder='Confirm password' onchange={onchange} />
                </div>
                <div className='bottomdiv'>
                    <Button text='SIGN UP' className='button' backgroundColor='#008080'  onclick={submit} color='#ffffff' />
                    <Button text="Login" classname="buttonlogin" onclick={gotologin}/>
              </div>
              <div className='checkboxdiv'>
                <Checkbox type='checkbox' text="remember me" />
              </div>
            </div>
        </div>
    </div>
)
}
export default SignUp;