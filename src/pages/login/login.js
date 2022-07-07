import Button from "../../components/button/button"
import Input from "../../components/input/input"
import "./login.scss"

const Login = () => (
  <div>
    <div className="form-container">
      <h1>log in</h1>
      <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" />
      <Input placeholder="Password" id="password" label="Your password" type="password" />
      <Button text="Log in" type="submit" />
    </div>
  </div>
)

export default Login