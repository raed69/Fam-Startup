import React, { useState } from 'react';
import './Chatbotpage.css';

const Chatbot = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [userMessage, setUserMessage] = useState("");

    const handleButtonClick = () => {
        if (userMessage.trim() === "") {
            alert('Please enter a message');
            return;
        }

        const userMessageObj = { sender: 'user', message: userMessage.trim() };
        setChatMessages([...chatMessages, userMessageObj]);
        setUserMessage("");

        botReply(userMessageObj.message);
    };

    const botReply = (message) => {
        let botMessageText = "";

        // Custom responses based on user input
        if (message.toLowerCase() === "hi" ) {
            botMessageText = "Hello! How can I assist you today?";
        } else if (message.toLowerCase().includes("startup")) {
            botMessageText = "We are a tech startup focusing on innovative solutions to improve daily life.";
        } else if (message.toLowerCase().includes("services")) {
            botMessageText = "We offer a range of services including web development, mobile app development, and Video Editing and Blockchain development.";
        } else {
            botMessageText = "I'm not sure how to respond to that. Can you ask something else about our startup or services?";
        }

        const botMessage = { sender: 'bot', message: botMessageText };
        setTimeout(() => {
            setChatMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 900); // Delay for demonstration purpose
    };

    return (
        <div className="chatbot-container">
            <div className="text-right mr-16">Conversation with Fam Bot</div>
            <div className="media media-center">
                <img
                    src='../../public/chatbot/bot.png'
                    style={{ float: 'left', margin: '10px' }}
                    className="rounded-circle img-thumbnail"
                    width="75px"
                    alt="..."
                />
                <div className="media-body" style={{ float: 'left' }}>
                    <h5 className="media-title">Fam Bot</h5>
                    <span className="media-status">online</span>
                </div>
            </div>
            <div id='chatcontainer' className='container border overflow-auto' style={{ height: '300px' }}>
                {chatMessages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.message}
                    </div>
                ))}
            </div>
            <div className="input-group">
                <input
                    id='textbox'
                    type='text'
                    className="form-control"
                    placeholder="Type your message..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
                <button id='sendbtn' type='button' className='btn btn-primary' onClick={handleButtonClick}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
