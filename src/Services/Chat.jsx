import React, { useState, useEffect } from "react";






let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

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
      <a href="/"><img src={""} alt="close icon" /></a>
    </div>
  </div>
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
    
    />
    <button className="sendButton" >Send</button>

  </form>

      </div>


    
    </div>
  );
}

export default Chat;