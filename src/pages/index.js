import Button from "../components/button/button"
import React, { useState } from "react"

import "./index.scss"

const Home = () => {

    const [activeTab, setActiveTab] = useState('messages')

    return (
        <div className="page-wrapper">
            <div className="left-content">
                {activeTab === 'messages' ? <div>messages</div> : <div>contacts</div>}
                <div className="tabs-container">
                    <button>messages</button>
                    <button>contacts</button>
                </div>
            </div>
            <div className="right-content" />


        </div>
    )
}

export default Home