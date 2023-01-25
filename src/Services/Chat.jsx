import React, { useState, useEffect } from "react";
import axios from "axios";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/messages").then(function (response) {
      console.log(response);
      setMessages(response.data);
    });
  }, []);
  console.log(messages, "aqqq");
  const article = { name: "abdullah", message: message };
  const Post = () => {
    axios
      .post("http://localhost:3000/messages", article)
      .then(function (response) {
        console.log(response, "aaa");
      });
  };

  //   useEffect(() => {
  //     const { name, room } = queryString.parse(location.search);

  //     socket = io(ENDPOINT);

  //     setRoom(room);
  //     setName(name)

  //     socket.emit('join', { name, room }, (error) => {
  //       if(error) {
  //         alert(error);
  //       }
  //     });
  //   }, [ENDPOINT, location.search]);

  return (
    <div className="chat_outerContainer">
      <div className="chat_container">
        <div className="infoBar">
          <div className="leftInnerContainer">
            <img className="onlineIcon" src={""} alt="online icon" />
            <h3>{room}</h3>
          </div>
          <div className="rightInnerContainer">
            <a href="/">
              <img src={""} alt="close icon" />
            </a>
          </div>
        </div>
        <div
          style={{
            overflow: "scroll",
          }}
        >
          {/* {messages &&
            messages?.map((item) => {
              return (
                <p
                  style={{
                    padding: "20px",

                    marginTop: "10px",
                  }}
                >
                  {item.message}
                </p>
              );
            })} */}
        </div>
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
          <button
            onClick={() => {
              Post();
            }}
            className="sendButton"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
