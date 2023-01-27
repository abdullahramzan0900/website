import React from "react";
import "./Home.css";
import { useState } from "react";
import About from "../ABOUT/About";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import CaseStudies from "../CaseStudies/CaseStudies";
import Contact from "../Contact/Contact";
import img from "../image/Services_detail_img.png";
import aws from "../image/aws.png";
import dynamic from "../image/dynamic.png";
import infor from "../image/infor.png";
import sap from "../image/sap.png";
import oracle2 from "../image/oracle2.png";
import migration from "../image/migration.png";
import cloud from "../image/cloud.png";
import integration from "../image/integration.png";
import search_upper from "../image/serach_upper.png";
import search from "../image/search_services.png";
import { fabClasses } from "@mui/material";
import chaticon from "../image/chat-icon.svg";
import cross from "../image/cross.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import logo from "../image/Logo.svg";
import { GridColumnsPanel } from "@mui/x-data-grid";
import Logo from "../image/Logo-icon.svg";

let x = 0;
console.log(x, "aaaa");

function Home() {
  const [background, Setbackground] = useState("img");
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [visible, Setvisible] = useState(true);
  const [visible1, Setvisible1] = useState(true);
  const [showchat, Setshowchat] = useState(false);
  const [disable, Setdisable] = useState(true);
  const [showname, Setshowname] = useState([]);// For name reponse 

  const [name, Setname] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/user").then(function (response) {
      console.log(response, "response");
    });
  }, []);
  function EventHandle(e) {
    console.log(e.target.value);
    Setname(e.target.value);
  }
  function PostName() {
    axios
      .post("http://localhost:3000/user", {
        name: name,
      })
      .then(function (response) {
        console.log(response, "response1");
        Setshowname(response.data.name)
      });
  }
  function POSTNAME_ID() {
    axios.post("http://localhost:3000/messages", {
      nameId: "ababab",
    });
  }

  console.log(showname,"name")

  const location = useLocation();
  console.log(location);

  const array = ["img1", "img2", "img4", "img3"];

  // setTimeout( () => {
  //   Setbackground(array[x]);
  //   console.log(x);
  //     if(x===0)
  //     {
  //       setActive(true);
  //       setActive1(false);
  //       setActive2(false);
  //       setActive3(false);
  // x++;
  //     }

  //   else if(x===1)
  //   {
  //     setActive1(true)
  //     setActive2(false)
  //     setActive(false)
  //     setActive3(false)
  //     x++;

  //   }
  //   else if(x===2)
  //   {  console.log("22222")
  //     setActive2(true);
  //     setActive(false);
  //     setActive1(false);
  //     setActive3(false);
  //     x++;

  //   }

  //     else if (x === 3) {
  //       setActive3(true)
  //       x=0;
  //       setActive2(false)
  //       setActive(false)
  //       setActive1(false)

  //     }
  //   if (x === 3) {
  //     x = 0;
  //   }
  //   x++;
  // }, 5000);

  return (
    <>
      <div className="banner ">
        <div className={background}></div>
        {/* <img src={banner} alt="loading"/> */}

        <div class="centered">
          <h1
            className="height"
            style={{
              wordSpacing: "5px",
            }}
          >
            Delivering{" "}
            <span
              style={{
                color: "#229958",
              }}
            >
              IT Solutions
            </span>{" "}
            That Enable you to {""}
            <span
              style={{
                color: "#229958",
              }}
            >
              Work Smarter
            </span>{" "}
          </h1>
          <p
            className="p1"
            style={{
              color: "#72818b",
              marginTop: "40px",
              fontSize: "1.5vh",
              fontFamily: "roboto",
              lineHeight: "30px",
            }}
          >
            Connecting industry needs with Innovation, Excellence, & IT .We
            create IT solutions that are easy to use, easy to manage, and easy
            to trust.
          </p>

          <div className="btns">
            <button
              onClick={() => {
                window.open("/contact", "_top");
              }}
              className="btn_contact"
            >
              Contact us
            </button>
            <button className="btn_learn">Learn more</button>
          </div>
          <div style={{}}>
            <button
              className="button1_home"
              // onClick={() => {
              //   Setbackground("img");
              //   x=0;
              // }}
              style={{
                backgroundColor: active ? "black" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button2_home"
              // onClick={() => {
              //   Setbackground("img2");
              //   x=1;
              // }}
              style={{
                backgroundColor: active1 ? "black" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button3_home"
              // onClick={() => {
              //   Setbackground("img3");
              //   x=2;

              // }}
              style={{
                backgroundColor: active2 ? "black" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button4_home"
              // onClick={() => {
              //   Setbackground("img4");
              //   x=3;
              // }}
              style={{
                backgroundColor: active3 ? "black" : "rgb(34, 153, 88)",
              }}
            ></button>
          </div>
        </div>
        <div style={{}} className="main_chat">
          <div style={{}} class="chat-popup">
            {/* <div class="form-container">
             
              <textarea
                placeholder="Enter your Name"
                name="msg"
                value={name}
                onChange={EventHandle}

                required
              ></textarea>

              <button className="btn" onClick={()=>{
               PostName();
               Setvisible(false);
               Setshowchat(true);
              }} >
             Start chat
              </button>
              <button 
                onClick={() => {
                  Setvisible(false);
                  Setvisible1(true);

                }}
           
                class="btn cancel"             
              >
              Close
              </button>
            </div> */}
          </div>
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
              <h1 onClick={() => {}} className="chat_text">
                Chat with us
              </h1>
            </div>
            <div>
              <img
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  Setvisible1(false);
                }}
                className="cross"
                src={cross}
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
                <input
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
                />
                <button
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
                </button>
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
                overflow: "scroll",
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
                disabled={disable}
              />
              <button
                disabled={disable}
                onClick={() => {}}
                className="sendButton"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <About />
        <Services />

        <div className="Services_detail">
          <div className="CloudServices">
            <div className="CloudServices_div2">
              <div className="outer_upper_div">
                <div className="CloudServices_div2_1">
                  <h1 className="h1_servcies_detail">Cloud Services</h1>
                  <hr className="line_Services-detail" style={{}}></hr>

                  <p className="p_servcies_detail">
                    Vyadoms cloud consulting services can direct you through
                    best practices, so you can get the most out of the cloud!
                  </p>
                </div>
              </div>

              <div className="upper_second_div">
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={img}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      AZURE
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={aws}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      AWS
                    </h1>
                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="CloudServices">
            <div className="CloudServices_div2">
              <div className="outer_upper_div">
                <div className="CloudServices_div2_1">
                  <h1 className="h1_servcies_detail">ERP Integration</h1>
                  <hr className="line_Services-detail" style={{}}></hr>
                  <p className="p_servcies_detail">
                    The simplest way to define ERP (Enterprise resource
                    planning) is as a comprehensive business system that will
                    meet the needs of the company’s management information. All
                    firms benefit from having effective ERP and accounting
                    systems, but utilizing these financial tools to their full
                    potential can have a significant impact. You may count on us
                    to provide you with effective financial systems as a
                    customer. With our professional knowledge and adaptable
                    tools in ERP, HR, payroll, and reporting, we help you.
                    Whether you have a straightforward operation, more intricate
                    manufacturing and logistics, or difficult project
                    management, we assist you in finding the optimal digital
                    solution. We operate with a variety of ERP systems,
                    including IFS Applications, Microsoft Dynamics, Infor, SAP,
                    Oracle, and Odoo to mention a few due to our strong ERP
                    vendor agnosticism. Our highly skilled staff combines
                    specialized development and supplemental solutions with
                    user-centered design to deliver the desired outcome for our
                    clients. We work with customers outside of business systems
                    and use the newest technology to enhance business
                    procedures, creating opportunities for automation that will
                    foster innovation at work.
                  </p>
                </div>
              </div>

              <div className="upper_second_div">
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={dynamic}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Dynamics
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={infor}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Infor
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={aws}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      SAP
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={oracle2}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Oracle
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="CloudServices">
            <div className="CloudServices_div2">
              <div className="outer_upper_div">
                <div className="CloudServices_div2_1">
                  <h1 className="h1_servcies_detail">Digital Transformation</h1>
                  <hr className="line_Services-detail" style={{}}></hr>

                  <p className="p_servcies_detail">
                    Although change has always been an aspect of business, it is
                    happening more quickly now. Multi-year programs for digital
                    transformation are no longer an option in the modern company
                    environment. The day will be ruled by speed, agility, and
                    momentum.
                  </p>
                </div>
              </div>

              <div className="upper_second_div">
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={migration}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Migration From Legacy System
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={cloud}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Conversion to cloud
                    </h1>
                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CloudServices">
            <div className="CloudServices_div2">
              <div className="outer_upper_div">
                <div className="CloudServices_div2_1">
                  <h1 className="h1_servcies_detail">Salesforce</h1>
                  <hr className="line_Services-detail" style={{}}></hr>

                  <p className="p_servcies_detail">
                    Salesforce offers easy, strong, and secure application
                    programming interfaces (API) for programmatic access to the
                    data. Use clicks or code to integrate your apps with systems
                    and data sources. Discover a variety of APIs, platform
                    events, integration techniques, and declarative tools,
                    including Apex utilities.
                  </p>
                </div>
              </div>

              <div className="upper_second_div">
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={integration}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Integration-Api
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={img}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Plug-In Development
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogs />
        <CaseStudies />
        <Contact />
      </div>
    </>
  );
}
export default Home;
