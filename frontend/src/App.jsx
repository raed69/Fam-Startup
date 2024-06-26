import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ErrorBoundary from "./ErrorBoundary";
import Chatbotpage from "./components/chatbot/Chatbotpage";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="chatbot-bubble" onClick={toggleChatbot}>
          {showChatbot ? (
            <button className="close-button" onClick={toggleChatbot}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          ) : (
            <span>💬</span>
          )}
        </div>
        {showChatbot && (
          <div className="chatbot-container">
            <Chatbotpage toggleChatbot={toggleChatbot} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
