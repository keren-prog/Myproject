import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import InputField from './InputField'
import Button from '../Button'
import loginstyle from '../Login-form/Login.module.css'

function Login() {
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  
  
    const onchangeemail = e => {
      setemail(e.target.value)
    }
  
    const onchangepassword = (e) => {
      setpassword(e.target.value)
    }
  
    const gotosignup = (e) => {
      e.preventDefault();
      history.push("/signup")
    }
  
    function submit(e){
      e.preventDefault();
  
      console.log({email, password});
  
    }
    return (
      <div className={loginstyle.main}>

<form className={loginstyle.form}>
  <div className={loginstyle.login}>
  <h1 >Login</h1>
  </div>
        <div>
        <InputField className={loginstyle.email}
         type="email" 
          label="Email" 
         onchange={onchangeemail} 
         placeholder="Kaynex-look@gmail.com"/>

          <InputField className={loginstyle.password} 
          type="password" 
          label="Password"
           onchange={onchangepassword}
            placeholder="password" />
        </div>
          <div className={loginstyle.buttons}>

          <Button text="Submit" 
            classname={loginstyle.buttonlogin} 
            onclick={submit}/>

            <Button text="Sign Up"
             classname={loginstyle.signup} 
             onclick={gotosignup}/>

          </div>
        </form>     
      </div>
          

    )
}
export default Login;