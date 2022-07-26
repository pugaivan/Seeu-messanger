import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import Input from "../components/input/input";
import Modal from "../components/modal/modal"
import { validate } from "../utils/validation";
import { resizeSides } from "../utils/helper"
import { FORM_FIELDS, PATH } from "../utils/constans"

import "./index.scss"

const { PHONE } = FORM_FIELDS;
const { LOGIN } = PATH;

const TABS = {
    messages: 'messages',
    contacts: 'contacts'
}

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        resizeSides();
        if (!localStorage.getItem("jwt")) {
            navigate(LOGIN)
        }
    }, [])

    const [isActive, setIsActive] = useState(false)
    const [activeTab, setActiveTab] = useState('messages')
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [errors, setErrros] = useState({});
    const onPhoneChange = (event) => setPhoneNumber(event.target.value);

    const modalSybmit = async (event) => {
        event.preventDefault();

        const validationErrors = validate({
            [PHONE]: {
                required: true,
                value: phoneNumber
            }
        }, { ...errors })
        setErrros({ ...validationErrors })
    }

    const deleteJwt = () => {
        localStorage.removeItem('jwt');
        navigate(LOGIN)

    }

    return (
        <div className="page-wrapper" id="container">
            <div className="left-content" id="left_panel">
                {activeTab === 'messages' ? <div>messages</div> : <div><button onClick={() => setIsActive(true)}>Add new contact</button></div>}
                <div className="tabs-container">
                    <button onClick={() => setActiveTab('messages')}>{TABS.messages}</button>
                    <button onClick={() => setActiveTab('contacts')}>{TABS.contacts}</button>
                </div>
            </div>
            <div className="right-content" id="right_panel" >
                <button onClick={deleteJwt}>Log out</button>
                <div id="drag"></div>
            </div>

            <Modal isActive={isActive} setIsActive={setIsActive} submit={modalSybmit}>
                <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} errors={errors} name={PHONE} />
            </Modal>
        </div>
    )
}

export default Home