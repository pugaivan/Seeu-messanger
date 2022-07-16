import Input from "../input/input"
import React, { useState } from "react"
import { DEFAULT_ICON_SIZE } from "../../utils/constans"
import "./passwordInput.scss"

const PasswordInput = (props) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const onShowPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <Input {...props} type={isPasswordShown ? "text" : "password"} >
            <button className="images-container" type="button" onClick={onShowPassword}>
                <img src={`/images/${isPasswordShown ? 'hide.png' : 'show.jpg'}`} width={DEFAULT_ICON_SIZE} height={DEFAULT_ICON_SIZE} />
            </button>
        </Input>
    )
}

export default PasswordInput