import React, { useState } from "react";
import Axios from "axios";
import "./Chatbot.css";
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {
  const [message, setMessage] = useState({ type: "", time: "", text: "" });
  const [messages, setMessages] = useState([]); // Store all the messages

  const getTime = () => {
    const d = new Date();
    let time = d.getHours() + ":" + d.getMinutes();
    return time;
  };

  const getResponse = (message) => {
    console.log(message.text);
    if (message.text === "Hi") {
      setMessages((messages) => [
        ...messages,
        { type: "msg rcvd", text: "Nice To Meet You!" },
      ]);
    }
    // Axios.get("");
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.length !== 0) {
      setMessages((messages) => [...messages, message]);
      getResponse(message);
    }
    setMessage({ type: "", text: "" });
  };
  return (
    <>
      <div className="wrapper">
        <div className="chatbot-container">
          <div className="chatbot-header">
            <FaRobot className="fa-robot" />
            <div className="header-right">
              <div className="name">Chatbot</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="chatbot-content">
            <div class="chat">
              {messages.length === 0
                ? ""
                : messages.map((msg) => (
                    <div data-time={msg.time} className={msg.type}>
                      {msg.text}
                    </div>
                  ))}
            </div>
          </div>
          <div className="chatbot-footer">
            <form onSubmit={sendMessage}>
              <input
                placeholder="Enter here..."
                className="chatbox"
                onChange={(e) =>
                  setMessage({
                    type: "msg sent",
                    time: getTime(),
                    text: e.target.value,
                  })
                }
                value={message.text}
              />
              <button className="sendBtn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
