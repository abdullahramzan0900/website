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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import logo from "../image/Logo.svg";
import { GridColumnsPanel } from "@mui/x-data-grid";


let x = 0;
const array = ["img", "img4", "img2", "img3"];

function Home() {

  const [background, Setbackground] = useState("img");
  const [active, setActive] = useState(true);
  const [counter,setCounter] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [visible, Setvisible] = useState(true);
  const [visible1, Setvisible1] = useState(false);
  const [showchat, Setshowchat] = useState(false);
  const [disable, Setdisable] = useState(true);
  const [showname, Setshowname] = useState([]);// For name reponses
  const [data, showData] = useState(false);
  const [data1, showData1] = useState(false);
  const [data2, showData2] = useState(false);
  const [data3, showData3] = useState(false);
  const [data4, showData4] = useState(false);
  const [data5, showData5] = useState(false);
  const [data6, showData6] = useState(false);
  const [data7, showData7] = useState(false);
  const [data8, showData8] = useState(false);
  const [data9, showData9] = useState(false);  
  const [value, setValue] = React.useState(0);
  

  const handleClick = () => {
    showData(!data);
    showData1(false);
    showData2(false);
    showData3(false);
    showData4(false);
    showData5(false);
    showData6(false);
    showData7(false);
    showData8(false);
    showData9(false);


  };

React.useEffect(() => {
  const interval = setInterval(() => {
    setValue((v) => {
      return v === 3? 0 : v + 1;
   
    });

  }, 3000);
  return () => clearInterval(interval);



}, []);




  

  
const navigate=useNavigate();

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



  const location = useLocation();
  // console.log(location);


  return (
    <>
      <div className="banner ">
        <div className={array[value]}></div>
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
            That Enable You To {""}
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
              marginTop: "3%",
              fontSize: "1.5vh",
              fontFamily: "roboto",
              lineHeight: "30px",
            }}
          >
            Connecting industry needs with Innovation, Excellence, & IT .We
            create IT solutions that are easy to use, easy to manage, and easy
            to trust.
          </p>

          <div style={{
    
          }} className="btns">
            <button
              onClick={() => {
                navigate('/Contact')
              }}
              className="btn_contact"
            >
              Contact us
            </button>
            <button onClick={()=>{
              navigate('/Services')
            }} className="btn_learn">Learn more</button>
          </div>
          <div style={{
            marginTop:'7%'
          }}>
            <button
              className="button1_home"
              // onClick={() => {
              //   Setbackground("img");
              //   x=0;
              // }}
              style={{
                backgroundColor: value===0 ? "green" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button2_home"
              // onClick={() => {
              //   Setbackground("img2");
              //   x=1;
              // }}
              style={{
                backgroundColor: value===1 ? "green" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button3_home"
              // onClick={() => {
              //   Setbackground("img3");
              //   x=2;

              // }}
              style={{
                backgroundColor: value===2 ? "green" : "rgb(34, 153, 88)",
              }}
            ></button>
            <button
              className="button4_home"
              // onClick={() => {
              //   Setbackground("img4");
              //   x=3;
              // }}
              style={{
                backgroundColor: value===3 ? "green" : "rgb(34, 153, 88)",
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

          <About />
          <Services />
        </div>
        <div className="Services_detail">
        <div className="CloudServices">
          <div className="CloudServices_div2">
            <div className="outer_upper_div">
              <div className="CloudServices_div2_1">
                <h1 className="h1_servcies_detail">Cloud Services</h1>
                <hr className="line_Services-detail" style={{}}></hr>

                <p className="p_servcies_detail">
                  Vyadoms cloud consulting services can direct you through best
                  practices, so you can get the most out of the cloud!
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data1 && (
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={img}
                    alt=""
                  />
                  <div
                    onClick={() => {
                      showData1(true);
                      showData2(false);
                      showData3(false);
                      showData4(false);
                      showData5(false);
                      showData6(false);
                      showData7(false);
                      showData8(false);
                      showData9(false);
                    }}
                    className="search_div"
                  >
                    <h1 className="h1_search_div" style={{}}>
                      AZURE
                    </h1>

                    <div  className="search_upper_div">
                      <img style={{
                        cursor:'pointer'
                      }} onClick={()=>{

                            showData1(true);
                            showData2(false);
                            showData3(false);
                            showData4(false);
                            showData5(false);
                            showData6(false);
                            showData7(false);
                            showData8(false);
                            showData9(false);
                            showData(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData1(true);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                          showData(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data1 && (
                <div
                  onClick={() => {
                    showData1(false);
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData1(false);

                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      AZURE
                    </h2>
                    As more businesses migrate to the cloud and invest in
                    Microsoft technologies, they are looking for certified
                    specialists to help them navigate the complexity of
                    Microsoft Azure. To select the proper service elements and
                    set them properly, customers still need experience. Our
                    managed services for Microsoft Azure allow clients to take
                    advantage of agile consumption-based models and consume
                    Azure services with ease.
                  </div>
                </div>
              )}

              {!data && (
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
                      <img onClick={()=>{
                                handleClick();
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          handleClick();
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data && (
                <div
                  onClick={() => {
                    showData(false);
  
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      AWS
                    </h2>
                    With more than 200 featured resources, from infrastructure
                    to machine learning, Amazon Web Services (AWS) is the
                    largest cloud computing platform. These modular solutions
                    combine optimum usability with speed optimization for your
                    application through features for content delivery, data
                    storage, and more. With AWS, you only pay for the precise
                    amount of assistance you need, resulting in a reduced
                    capital commitment and a faster time to value without
                    sacrificing productivity.
                  </div>
                </div>
              )}
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
                  The simplest way to define ERP (Enterprise resource planning)
                  is as a comprehensive business system that will meet the needs
                  of the company’s management information. All firms benefit
                  from having effective ERP and accounting systems, but
                  utilizing these financial tools to their full potential can
                  have a significant impact. You may count on us to provide you
                  with effective financial systems as a customer. With our
                  professional knowledge and adaptable tools in ERP, HR,
                  payroll, and reporting, we help you. Whether you have a
                  straightforward operation, more intricate manufacturing and
                  logistics, or difficult project management, we assist you in
                  finding the optimal digital solution. We operate with a
                  variety of ERP systems, including IFS Applications, Microsoft
                  Dynamics, Infor, SAP, Oracle, and Odoo to mention a few due to
                  our strong ERP vendor agnosticism. Our highly skilled staff
                  combines specialized development and supplemental solutions
                  with user-centered design to deliver the desired outcome for
                  our clients. We work with customers outside of business
                  systems and use the newest technology to enhance business
                  procedures, creating opportunities for automation that will
                  foster innovation at work.
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data2 && (
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

                    <div onClick={()=>{
                       
                    }} className="search_upper_div">
                      <img onClick={()=>{
                          showData2(true);
                          showData1(false);
                          showData(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData2(true);
                          showData1(false);
                          showData(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data2 && (
                <div
                  onClick={() => {
                    showData2(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData2(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Dynamics
                    </h2>
                    The most comprehensive business software system currently
                    available is Dynamics. Microsoft Dynamics 365 is a
                    cloud-based ERP and CRM system that may assist you in
                    managing your business and achieving successful outcomes
                    based on AI and real-time insights.
                  </div>
                </div>
              )}
              {!data3 && (
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
                      <img onClick={()=>{
                          showData3(true);
                          showData1(false);
                          showData2(false);
                          showData(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData3(true);
                          showData1(false);
                          showData2(false);
                          showData(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data3 && (
                <div
                  onClick={() => {
                    showData3(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData3(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Infor
                    </h2>
                    Discover more about infor. With our industry-leading
                    solution for integrating Infor's sector-specific ERP with
                    your e-commerce, CRM, PIM, and other technologies, you can
                    eliminate manual effort and increase productivity.
                  </div>
                </div>
              )}

              {!data4 && (
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

                    <div onClick={()=>{

                    }} className="search_upper_div">
                      <img onClick={()=>{
                            showData4(true);
                            showData1(false);
                            showData2(false);
                            showData3(false);
                            showData(false);
                            showData5(false);
                            showData6(false);
                            showData7(false);
                            showData8(false);
                            showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData4(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data4 && (
                <div
                  onClick={() => {
                    showData4(false);

                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData4(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      SAP
                    </h2>
                    One of the most popular enterprise resource planning (ERP)
                    tools worldwide is SAP. Such software enables complete
                    operational optimization of corporate processes. Its use is
                    essentially required for large businesses because it is the
                    sole means of preserving true control over internal
                    operations. SAP streamlines and simplifies the management of
                    many company operations.
                  </div>
                </div>
              )}
              {!data5 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={oracle2}
                    alt=""
                  />
                  <div  className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Oracle
                    </h1>

                    <div className="search_upper_div">
                      <img onClick={()=>{
                          showData5(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData5(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data5 && (
                <div
                  onClick={() => {
                    showData5(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData5(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Oracle
                    </h2>
                    Nearly every industry and business of any size can benefit
                    from Oracle's ERP software, which includes JD Edwards, ERP
                    Cloud, and NetSuite. ERP implementation benefits businesses
                    by improving access to precise data, integrating fragmented
                    systems, managing business growth better, increasing
                    customer happiness, and lowering expenses. Business
                    executives can operate their organization profitably and
                    efficiently with the help of Oracle enterprise software
                    solutions, which offer a single source of truth.
                  </div>
                </div>
              )}
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
              {!data6 && (
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
                      <img onClick={()=>{
                             showData6(true);
                             showData1(false);
                             showData2(false);
                             showData3(false);
                             showData4(false);
                             showData5(false);
                             showData(false);
                             showData7(false);
                             showData8(false);
                             showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData6(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData(false);
                          showData7(false);
                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data6 && (
                <div
                  onClick={() => {
                    showData6(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData6(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Legacy Migrations
                    </h2>
                    We have an outmoded piece of computing gear or software that
                    is still in use and is referred to as a legacy system. These
                    systems are often built on outdated, out-of-date
                    technologies, even though they may still function as
                    intended and satisfy the needs for which they were initially
                    intended. An outdated IT system, or legacy system, is
                    transferred to a more modern hardware or software platform
                    during a legacy system migration.
                  </div>
                </div>
              )}

              {!data7 && (
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
                      <img onClick={()=>{
                            showData7(true);
                            showData1(false);
                            showData2(false);
                            showData3(false);
                            showData(false);
                            showData5(false);
                            showData6(false);
  
                            showData8(false);
                            showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData7(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData(false);
                          showData5(false);
                          showData6(false);

                          showData8(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data7 && (
                <div
                  onClick={() => {
                    showData7(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData7(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Conversion to Cloud
                    </h2>
                    Moving data and applications to cloud (online) environments
                    can be summed up as cloud transformation. Moving data from
                    one location, one format, or one application to another is
                    referred to as data migration. These days, companies
                    frequently begin data migrations as they switch from
                    on-premises infrastructure and applications to cloud-based
                    storage and apps in an effort to optimize or change their
                    business.
                  </div>
                </div>
              )}
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
                  and data sources. Discover a variety of APIs, platform events,
                  integration techniques, and declarative tools, including Apex
                  utilities.
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data8 && (
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
                      <img onClick={()=>{
                          showData8(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData(false);
                          showData9(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData8(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData(false);
                          showData9(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data8 && (
                <div
                  onClick={() => {
                    showData8(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData8(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Integration API
                    </h2>
                    API integration is the link between two or more
                    programs through their APIs (application programming
                    interfaces), which enables systems to exchange data sources.
                    To keep data synchronized, increase productivity, and
                    generate income, API interfaces enable activities across
                    numerous departments and organizational levels.
                  </div>
                </div>
              )}
              {!data9 && (
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
                      <img onClick={()=>{
                            showData9(true);
                            showData1(false);
                            showData2(false);
                            showData3(false);
                            showData4(false);
                            showData5(false);
                            showData6(false);
                            showData7(false);
                            showData8(false);
                            showData(false);
                      }}
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData9(true);
                          showData1(false);
                          showData2(false);
                          showData3(false);
                          showData4(false);
                          showData5(false);
                          showData6(false);
                          showData7(false);
                          showData8(false);
                          showData(false);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data9 && (
                <div
                  onClick={() => {
                    showData9(false);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData9(false);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Plug-in Development
                    </h2>
                    One of the most adaptable web content management systems on
                    the market is WordPress. There are tens of thousands of
                    plugins accessible for your needs in addition to being open
                    source, which enables the incremental extension and business
                    process automation.
                  </div>
                </div>
              )}
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
