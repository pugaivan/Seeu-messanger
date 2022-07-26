import Button from "../components/button/button"
import React, { useState } from "react"

import "./index.scss"
import { resizeSides } from "../utils/helper"

window.onload = function () {
    resizeSides();
};

const TABS = {
    messages: 'messages',
    contacts: 'contacts'
}

const Home = () => {

    const [activeTab, setActiveTab] = useState('messages')

    return (
        <div className="page-wrapper" id="container">
            <div className="left-content" id="left_panel">
                {activeTab === 'messages' ? <div>messages</div> : <div>contacts</div>}
                <div className="tabs-container">
                    <button onClick={() => setActiveTab('messages')}>{TABS.messages}</button>
                    <button onClick={() => setActiveTab('contacts')}>{TABS.contacts}</button>
                </div>
            </div>
            <div className="right-content" id="right_panel" >
                right content!
                <div id="drag"></div>
            </div>


        </div>
    )
}

export default Home