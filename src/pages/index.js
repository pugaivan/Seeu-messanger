import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

import Messages from "../components/messages/messages";
import Contacts from "../components/contacts/contacts";
import { resizeSides } from "../utils/helper"
import { PATH } from "../utils/constans"
import { deleteJwtToken, isUserAuthorized } from "../utils/localStorage";

import "./index.scss"

const { LOGIN } = PATH;

const TABS = {
    MESSAGES: 'messages',
    CONTACTS: 'contacts'
}

const Home = () => {
    const navigate = useNavigate();
    const container = useRef();
    const leftPanel = useRef();
    const rightPanel = useRef();
    const drag = useRef();

    useEffect(() => {
        resizeSides(container, leftPanel, rightPanel, drag);
        if (!isUserAuthorized("jwt")) {
            navigate(LOGIN)
        }
    }, [])
    const [activeTab, setActiveTab] = useState(TABS.MESSAGES)

    const deleteJwt = () => {
        deleteJwtToken('jwt');
        navigate(LOGIN)
    }

    return (
        <div className="page-wrapper" ref={container}>
            <div className="left-content" ref={leftPanel}>
                {activeTab === `${TABS.MESSAGES}` ? <Messages /> : <Contacts />}
                <div className="tabs-container">
                    <button onClick={() => setActiveTab(TABS.MESSAGES)}>{TABS.MESSAGES}</button>
                    <button onClick={() => setActiveTab(TABS.CONTACTS)}>{TABS.CONTACTS}</button>
                </div>
            </div>
            <div className="right-content" ref={rightPanel} >
                <button onClick={deleteJwt}>Log out</button>
                <div className="drag" ref={drag}></div>
            </div>
        </div>
    )
}

export default Home