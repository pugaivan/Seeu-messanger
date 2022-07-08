import Input from "../../components/input/input"
import Button from "../../components/button/button"
import Link from "../../components/link/link"
import React, { useState } from "react"

const Registration = () => {
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [registrationPassword, setRegistrationPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setFastName] = useState(null);


  const onRegistrationNumberChange = event => setRegistrationNumber(event.target.value);
  const onRegistrationPasswordChange = event => setRegistrationPassword(event.target.value);
  const onFirstNameChange = event => setFirstName(event.target.value);
  const onLastNameChange = event => setFastName(event.target.value);

console.log(registrationNumber,registrationPassword, firstName ,lastName)
  return (
  <div>
    <div className="form-container">
    <h2>Registration</h2>
    <form>
      <Input  placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onRegistrationNumberChange}/>
      <Input  placeholder="First name" id="First-name" label="Your first name" type="text" onChange={onRegistrationPasswordChange}/>
      <Input  placeholder="Last name" id="Last-name" label="Your last name" type="text" onChange={onFirstNameChange}/>
      <Input  placeholder="Password" id="password" label="Your password" type="password" onChange={onLastNameChange} />
      <Link text="Do you already have an account?" link="http://localhost:3000/login" type="Log in"/>
      <Button text="Register" type="submit" />
      </form>
    </div>  
  </div>
)
}


export default Registration