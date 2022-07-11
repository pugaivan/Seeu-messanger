import Input from "../input/input"
import React, { useState } from "react"
import "./passwordInput.scss"





const PasswordInput = (props) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const onShowPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <Input {...props} type={isPasswordShown ? "text" : "password"} ><button class="images-container" type="button" onClick={onShowPassword}>{isPasswordShown ? <img src="/images/hide.png" width="30px" height="30px"/> : <img src="/images/show.jpg" width="30px" height="30px"/>}</button></Input>
    )
}

export default PasswordInput