import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

import Messages from "../components/messages/messages";
import IsUserAuthorized from "../components/isUserAuthorized/isUserAuthorized";
import { resizeSides } from "../utils/helper"
import { PATH } from "../utils/constans"
import { deleteStorage, getStorage } from "../utils/localStorage";

import "./index.scss"

const { LOGIN } = PATH;

const TABS = {
    messages: 'messages',
    contacts: 'contacts'
}

const Home = () => {
    const navigate = useNavigate();
    const container = useRef();
    const left_panel = useRef();
    const right_panel = useRef();
    const drag = useRef();

    useEffect(() => {
        resizeSides(container, left_panel, right_panel, drag);
        if (!getStorage("jwt")) {
            navigate(LOGIN)
        }
    }, [])
    const [activeTab, setActiveTab] = useState('messages')

    const deleteJwt = () => {
        deleteStorage('jwt');
        navigate(LOGIN)
    }

    return (
        <div className="page-wrapper" ref={container}>
            <div className="left-content" ref={left_panel}>
                {activeTab === 'messages' ? <Messages /> : <IsUserAuthorized />}
                <div className="tabs-container">
                    <button onClick={() => setActiveTab(TABS.messages)}>{TABS.messages}</button>
                    <button onClick={() => setActiveTab(TABS.contacts)}>{TABS.contacts}</button>
                </div>
            </div>
            <div className="right-content" ref={right_panel} >
                <button onClick={deleteJwt}>Log out</button>
                <div className="drag" ref={drag}></div>
            </div>
        </div>
    )
}

export default Home