import React from "react";
import { useState } from "react";
import cross from "./image/cross.png";
import chaticon from "./image/chat-icon.svg";
import Logo from "./image/Logo-icon.svg";

function Chat()
{   const [visible1, Setvisible1] = useState(true);
    const [showchat, Setshowchat] = useState(false);
    const [visible, Setvisible] = useState(true);
    const [showname, Setshowname] = useState([]);// For name reponses
    return(
        <>
             <div
            style={{
              display: visible1 ? "flex" : "none",
            }}
            className="chat_upper_div"
          >
            <div className="chat_upper_div_1">
              <img
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  Setvisible1(false);
                  Setshowchat(true);
                }}
                className="chaticon"
                src={chaticon}
                alt=""
              />
            
            </div>
         
          </div>
          <div
            style={{
              display: showchat ? "flex" : "none",
            }}
            className="chat_container"
          >
            <div className="infoBar">
              <div style={{}} className="leftInnerContainer">
                <img className="onlineIcon" src={Logo} alt="online icon" />
              </div>
              <div
                style={{
                  display: visible ? "flex" : "none",
                  padding: "10px",
                  position: "absolute",
                  top: "20%",
                  border: "none",
                }}
                className="textfield_name"
              >
                {/* <input
                  name="msg"
                  value={name}
                  onChange={EventHandle}
                  style={{
                    height: "40px",
                    width: "120px",
                    borderRadius: "7px",
                    border: "none",
                    fontSize: "15px",
                    fontFamily: "roboto",
                    cursor: "text",
                  }}
                  placeholder="Enter your name"
                  type="text"
                /> */}
                {/* <button
                  onClick={() => {
                    PostName();
                    Setdisable(false);
                    Setvisible(false);
                  }}
                  style={{
                    padding: "10px",
                    marginLeft: "12px",
                    height: "40px",
                    color: "white",
                    fontFamily: "roboto",
                    borderRadius: "7px",
                    background: "#229958",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Start chat
                </button> */}
              </div>
           
              <div className="rightInnerContainer">
                <img
                  onClick={() => {
                    Setshowchat(false);
                    Setvisible1(true);
                  }}
                  style={{
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                  src={cross}
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                height:'100%'
              }}
            >
     
              <p style={{
                padding:'10px', 
                paddingLeft:'50px',
                fontSize:'14px'
            }}>{showname}</p>  
                     
          
         

           
            </div>
            <form className="form">
              <input
                className="input"
                type="text"
                placeholder="Type a message..."
 
              />
              <button
               
               
                className="sendButton"
              >
                Send
              </button>
            </form>
          </div>
        
        </>
    )
}
export default  Chat;