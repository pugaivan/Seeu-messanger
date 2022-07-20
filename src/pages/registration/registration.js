import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/input/input"
import Button from "../../components/button/button"
import PasswordInput from "../../components/passwordInput/passwordInput"
import { validate } from "../../utils/validation";
import { FORM_FIELDS, PATH } from "../../utils/constans"
import { createUser } from "../../service/api";
import { isObjectEmpty } from "../../utils/helper"
import "./registration.scss"

const { LOGIN } = PATH;
const { PHONE, PASSWORD, LASTNAME, FIRSTNAME } = FORM_FIELDS;

const Registration = () => {
  const [phoneNumber, setRegistrationNumber] = useState(null);
  const [password, setRegistrationPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setFastName] = useState(null);
  const [errors, setErrros] = useState({});
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();

  const onRegistrationNumberChange = event => setRegistrationNumber(event.target.value);
  const onRegistrationPasswordChange = event => setRegistrationPassword(event.target.value);
  const onFirstNameChange = event => setFirstName(event.target.value);
  const onLastNameChange = event => setFastName(event.target.value);

  const formSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate({
      [PHONE]: {
        required: true,
        value: phoneNumber
      },
      [PASSWORD]: {
        required: true,
        value: password
      },
      [FIRSTNAME]: {
        required: true,
        value: firstName
      },
      [LASTNAME]: {
        required: true,
        value: lastName
      }
    }, { ...errors })
    setErrros({ ...validationErrors })

    if (isObjectEmpty(validationErrors)) {
      const response = await createUser({
        phoneNumber,
        password,
        lastName,
        firstName
      })
<<<<<<< Updated upstream
=======
      if (response.isSuccessful) {
        navigate(LOGIN)
      } else {
        seterrorMessage(response.data.response.data.errorMessage)
      }
>>>>>>> Stashed changes
    }
    navigate(LOGIN)
  }

  return (
    <div>
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={formSubmit}>
          <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onRegistrationNumberChange} errors={errors} name={PHONE} />
          <Input placeholder="First name" id="first-name" label="Your first name" type="text" onChange={onFirstNameChange} errors={errors} name={FIRSTNAME} />
          <Input placeholder="Last name" id="last-name" label="Your last name" type="text" onChange={onLastNameChange} errors={errors} name={LASTNAME} />
          <PasswordInput placeholder="Password" id="password" label="Your password" type="password" onChange={onRegistrationPasswordChange} errors={errors} name={PASSWORD} />
          <h5>{errorMessage}</h5>
          <div className="link-container">
            Do you already have an account? <Link to={LOGIN} className="link-pages">Log in</Link>
          </div>
          <Button text="Register" />
        </form>
      </div>
    </div>
  )
}


export default Registration