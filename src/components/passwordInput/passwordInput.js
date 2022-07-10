import Input from "../input/input"
import React, { useState } from "react"



const PasswordInput = (props) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const onShowPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <Input {...props} type={isPasswordShown ? "text" : "password"} ><button type="button" onClick={onShowPassword}>{isPasswordShown ? "Hide" : "Show"}</button></Input>
    )
}

export default PasswordInput