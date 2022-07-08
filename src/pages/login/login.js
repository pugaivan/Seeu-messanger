import Button from "../../components/button/button"
import Input from "../../components/input/input"
import Link from "../../components/link/link"
import React, { useState } from "react"
import "./login.scss"


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);

  const onPhoneChange = event => setPhoneNumber(event.target.value);
  const onPasswordChange = event => setPassword(event.target.value);

  console.log(password, phoneNumber)
  
 return (
  <div>
    <div className="form-container">
      <h2>log in</h2>
      <form>
      <Input  placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} />
      <Input  placeholder="Password" id="password" label="Your password" type="password" onChange={onPasswordChange}/>
      <Link text="Don't have an account yet?" link="http://localhost:3000/registration" type="Register"/>
      <Button text="Log in" type="submit" />
      </form>
    </div>
  </div>
)
}

export default Login