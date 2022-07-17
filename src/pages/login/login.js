import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../components/button/button"
import Input from "../../components/input/input"
import PasswordInput from "../../components/passwordInput/passwordInput";
import "./login.scss"
import { validate } from "../../utils/validation";
import { FORM_FIELDS, PATH } from "../../utils/constans"
import { loginUser } from "../../service/api";
import { isObjectEmpty } from "../../utils/helper"

const { REGISER, MAIN } = PATH;
const { PHONE, PASSWORD } = FORM_FIELDS;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrros] = useState({});
  const navigate = useNavigate();

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
      if (response.data.token) {
        localStorage.setItem('jwt', response.data.token)
        navigate(MAIN)
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