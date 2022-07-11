import Button from "../../components/button/button"
import Input from "../../components/input/input"
import Link from "../../components/link/link"
import React, { useState } from "react";
import "./login.scss"
import { validate } from "../../utils/validation";
import PasswordInput from "../../components/passwordInput/passwordInput";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Registration from "../registration/registration";
import { FORM_FIELDS } from "../../utils/constans"

const { PHONE, PASSWORD } = FORM_FIELDS;


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrros] = useState({});

  const onPhoneChange = (event) => setPhoneNumber(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const formSubmin = (event) => {
    event.preventDefault();

    const validationErrors = validate({
      [PHONE]: {
        required: true,
        value: phoneNumber
      },
      [PASSWORD]: {
        required: true,
        value: password
      }
    }, { ...errors })
    setErrros({ ...validationErrors })
  }

  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/registration');
  };

  return (
    <div>
      <div className="form-container">
        <h2>log in</h2>
        <form onSubmit={formSubmin}>
          <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} errors={errors} name={PHONE} />
          <PasswordInput placeholder="Password" id="password" label="Your password" onChange={onPasswordChange} errors={errors} name={PASSWORD} />
          <Link text="Don't have an account yet?" onClick={navigateToContacts} type="Register" />
          <Button text="Log in" />
          <Routes>
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </form>
      </div>
    </div>
  )
}

export default Login