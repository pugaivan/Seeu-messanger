import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Button from "../../components/button/button"
import Input from "../../components/input/input"
import PasswordInput from "../../components/passwordInput/passwordInput";
import { validate } from "../../utils/validation";
import { FORM_FIELDS, PATH } from "../../utils/constans"
import { isObjectEmpty } from "../../utils/helper"
import { loginUser } from "../../service/api";
import { isUserAuthorized, createJwtToken } from "../../utils/localStorage";

import "./login.scss"

const { REGISER, HOME } = PATH;
const { PHONE, PASSWORD } = FORM_FIELDS;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrros] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if (isUserAuthorized("jwt")) {
      navigate(HOME)
    }
  }, [])

  const onPhoneChange = (event) => setPhoneNumber(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const formSubmin = async (event) => {
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

    if (isObjectEmpty(validationErrors)) {
      const response = await loginUser({
        phoneNumber,
        password
      })
      if (response.isSuccessful) {
        createJwtToken('jwt', response.data.token)
        navigate(HOME)
      } else {
        setErrorMessage(response.data.errorMessage)
      }

    }
  }

  return (
    <div>
      <div className="form-container">
        <h2>log in</h2>
        <form onSubmit={formSubmin}>
          <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} errors={errors} name={PHONE} />
          <PasswordInput placeholder="Password" id="password" label="Your password" onChange={onPasswordChange} errors={errors} name={PASSWORD} />
          <h5>{errorMessage}</h5>
          <div className="link-container">
            Don't have account yet? <Link to={REGISER} className="link-pages">Register</Link>
          </div>
          <Button text="Log in" />
        </form>
      </div>
    </div>
  )
}

export default Login