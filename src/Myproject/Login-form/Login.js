import {useHistory} from 'react-router-dom'
import {useState} from 'react'


import InputField from './InputField'
import Button from '../button'

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
        <form>
          <h1>Login</h1>
          <InputField type="email" label="Email" name="email" onchange={onchangeemail} placeholder="Kaynex-look@gmail.com"/>
          <InputField type="password" label="Password" name="password" onchange={onchangepassword} />
          <div>
            <Button text="Sign Up" classname="buttonlogin" onclick={gotosignup}/>
            <Button text="Submit" classname="buttonsignup" onclick={submit}/>
          </div>
        </form>        

    )
}
export default Login;