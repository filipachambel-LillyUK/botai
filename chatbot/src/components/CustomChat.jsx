import React, { useState } from "react";
import axios from "axios";
import boticon from "../assets/message_icon.svg";
import arrowdown from "../assets/arrow_down.svg";
import "./customchat.css";

export default function CustomChat() {
  const [response, setResponse] = useState("");
  const [value, setValue] = useState("");
  const [toggleBot, setToggleBot] = useState(false);

  const openBot = () => {
    setToggleBot(!toggleBot);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3005/chatbot", {
      question: value,
    });
    setResponse(response.data);
  };

  return (
    <>
    <div className="openbot-btn">
      <button onClick={openBot}>
        <img src={boticon} />
      </button>
      </div>
      {toggleBot && (
        <div className="main-cnt">
          <div className="main-header">
            <h3>Lilly Chatbot</h3>
            <button onClick={openBot}>
                <img src={arrowdown}/>
            </button>
          </div>
          <div className="main-conversation-window"></div>
          <div>
            <p>Chatbot: {response}</p>
          </div>
          <div className="answer-prompt-cnt">
            <div className="answer-prompt-input">
              <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Ask something..."
              />
            </div>
            <button onClick={handleSubmit}>Submit Answer</button>
          </div>
        </div>
      )}
    </>
  );
}
