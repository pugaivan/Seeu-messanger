import Button from "../../components/button/button"
import Input from "../../components/input/input"
import Link from "../../components/link/link"
import React, { useState } from "react";
import "./login.scss"


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrros] = useState({});

  const onPhoneChange = (event) => setPhoneNumber(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);


  const formSubmin = (event) => {
    event.preventDefault();
    isFormValid();

  }

  const isFormValid = () => {
    let isAnyErrors = false
    if (!phoneNumber) {
      isAnyErrors = true
      errors['phone'] = { message: 'phone is required' }
      setErrros({ ...errors })
    }
    if (!password) {
      isAnyErrors = true
      errors['password'] = { message: 'password is required' }
      setErrros({ ...errors })
    }
    if (!isAnyErrors) {
      setErrros({})
    }
  }

  return (
    <div>
      <div className="form-container">
        <h2>log in</h2>
        <form onSubmit={formSubmin}>
          <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} errors={errors} name="phone" />
          <Input placeholder="Password" id="password" label="Your password" type="password" onChange={onPasswordChange} errors={errors} name="password" />
          <Link text="Don't have an account yet?" link="http://localhost:3000/registration" type="Register" />
          <Button text="Log in" />
        </form>
      </div>
    </div>
  )
}


export default Login