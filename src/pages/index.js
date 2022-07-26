import Modal from "../components/modal/modal"
import React, { useState } from "react"

import "./index.scss"
import { validate } from "../utils/validation";
import { resizeSides } from "../utils/helper"
import Input from "../components/input/input";
import { FORM_FIELDS } from "../utils/constans"
import Button from "../components/button/button";

const { PHONE } = FORM_FIELDS;
window.onload = function () {
    resizeSides();
};

const TABS = {
    messages: 'messages',
    contacts: 'contacts'
}

const Home = () => {

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
                <div id="drag"></div>
            </div>

            <Modal isActive={isActive} setIsActive={setIsActive} submit={modalSybmit}>
                <Input placeholder="Phone" id="phone-number" label="Phone number" type="text" onChange={onPhoneChange} errors={errors} name={PHONE} />
            </Modal>
        </div>
    )
}

export default Home