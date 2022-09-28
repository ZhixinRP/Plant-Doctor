import React, { useState , useEffect } from 'react';
import Axios from 'axios';
import './Chatbot.css';
import { FaRobot } from 'react-icons/fa';

const url = 'http://49.245.27.185:8888/chatbot/';

const Chatbot = () => {
  const [message, setMessage] = useState({ type: '', time: '', text: '' });
  const [messages, setMessages] = useState([]); // Store all the messages

  const getTime = () => {
    const d = new Date();
    let time = d.getHours() + ':' + d.getMinutes();
    return time;
  };

  const getResponse = async (message) => {
    try {
      const response = await Axios.get(url + message.text);
      // console.log(response);
      // console.log(message.text);
      setMessages((messages) => [
        ...messages,
        {
          type: 'msg rcvd',
          text: response.data[0].response,
        },
      ]);
    } catch (error) {}
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.length !== 0) {
      setMessages((messages) => [...messages, message]);
      getResponse(message);
    }
    setMessage({ type: '', text: '' });
  };

  useEffect(() => {
    async function fetchData() {
      await Axios.get('http://49.245.27.185:8888/sensor/').then((response) => {
        console.log(response);
      });
    }
    fetchData();
  }, []);
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
            <div className="chat">
              {messages.length === 0
                ? ''
                : messages.map((msg, id) => (
                    <div key={id} data-time={msg.time} className={msg.type}>
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
                    type: 'msg sent',
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
