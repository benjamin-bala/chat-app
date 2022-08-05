import React from "react";
import './index.css';

export default function Friend(){
    return(
        <div className="Friend">
                <div className="image_container">
                    <p className="image"/>
                </div>
                <div className="user_and_message_preview">
                    <p className="user">Name</p>
                    <p className="message_preview">Message Preview</p>
                </div>
                <div className="time_and_amount_of_messages">
                    <p className="time">00:00</p>
                    <p className="amount_of_messages">0</p>
                </div>
        </div>
    )
}