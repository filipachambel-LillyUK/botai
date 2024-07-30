import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [response, setResponse] = useState("");
  const [value, setValue] = useState("");

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
    <div className="main-cnt">
      <div className="main-header">
        <h3>Lilly Chatbot</h3>
      </div>
      <div className="main-conversation-window"></div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
      <div className="answer-prompt-cnt">
 
        <input type="text" value={value} onChange={onChange} />


        <button onClick={handleSubmit}>Submit Answer</button>

      </div>
    </div>
  );
}

export default App;
