import Input from "../input/input"
import React, { useState } from "react"
import { IMAGE_STYLE } from "../../utils/constans"
import "./passwordInput.scss"

const PasswordInput = (props) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const onShowPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <Input {...props} type={isPasswordShown ? "text" : "password"} ><button className="images-container" type="button" onClick={onShowPassword}><img src={`/images/${isPasswordShown ? 'hide.png' : 'show.jpg'}`} width={IMAGE_STYLE} height={IMAGE_STYLE} /></button></Input>
    )
}

export default PasswordInput