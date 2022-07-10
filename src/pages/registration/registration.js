import Input from "../../components/input/input"
import Button from "../../components/button/button"
import Link from "../../components/link/link"
import React, { useState } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { validate } from "../../utils/validation";

const Registration = () => {
  const [phoneNumber, setRegistrationNumber] = useState(null);
  const [password, setRegistrationPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setFastName] = useState(null);
  const [errors, setErrros] = useState({});


  const onRegistrationNumberChange = event => setRegistrationNumber(event.target.value);
  const onRegistrationPasswordChange = event => setRegistrationPassword(event.target.value);
  const onFirstNameChange = event => setFirstName(event.target.value);
  const onLastNameChange = event => setFastName(event.target.value);

  console.log(firstName, lastName)

  const formSubmin = (event) => {
    event.preventDefault();

    const validationErrors = validate({
      phoneNumber: {
        required: true,
        value: phoneNumber
      },
      password: {
        required: true,
        value: password
      },
      firstName: {
        required: true,
        value: firstName
      },
      lastName: {
        required: true,
        value: lastName
      }


    }, { ...errors })
    setErrros({ ...validationErrors })
  }

  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={formSubmin}>
          <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onRegistrationNumberChange} errors={errors} name="phoneNumber" />
          <Input placeholder="Password" id="password" label="Your password" type="password" onChange={onRegistrationPasswordChange} errors={errors} name="password" />
          <Input placeholder="First name" id="first-name" label="Your first name" type="text" onChange={onFirstNameChange} errors={errors} name="firstName" />
          <Input placeholder="Last name" id="last-name" label="Your last name" type="text" onChange={onLastNameChange} errors={errors} name="lastName" />
          <Link text="Do you already have an account?" onClick={navigateToContacts} type="Log in" />
          <Button text="Register" />
          <Routes>
            <Route path="/login" element={<Registration />} />
          </Routes>
        </form>
      </div>
    </div>
  )
}


export default Registration