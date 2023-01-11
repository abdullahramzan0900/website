import React from "react";
import Service1 from "../image/Services1.png";
import Service2 from "../image/Services2.png";
import Service3 from "../image/Services3.png";
import Servcies4 from "../image/Servcies4.png";
import background from "../image/background.png";
import line8 from "../image/Line8.png";
import search from "../image/search.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

import "./Services.css";

function Services() {

  return (
    <>
      <div className="main">
        <div class="service_main">
          <div className="Services">
            <div
              style={{
                width: "70%",
              }}
            >
              <div style={{}}>
                <h1
                  style={{
                    fontSize: "40px",
                    color: "white",
                    fontFamily: "roboto",
                    paddingTop: "20px",
                  
                  }}
                >
                Our Services
                </h1>
                <img
                  style={{
                    paddingTop: "20px",
                  }}
                  src={line8}
                  alt=""
                />
              </div>

              <p
                style={{
                  fontSize: "15px",
                  textAlign: "left",
                  color: "white",
                  fontFamily: "roboto",
                  paddingTop: "20px",
                }}
              >
                We provide quality services to out client that support bussniess
                in developing and implementing ovations solution for performance
                ,growth and relevance
              </p>
              <button
                style={{
                  width: "120px",
                  height: "45px",
                  backgroundColor: "white",
                  color: "#229958",
                  borderRadius: "10px",
                  border: "none",
                  marginTop: "40px",
                  fontFamily: "roboto",

                }}
              >
                Learn more
              </button>
            </div>
          </div>
          <div class="image-grid">
            <div
              style={{
                width: "600px",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      height: "180px",
                      padding: "10px",
                      border: "none",
                    }}
                    src={Service1}
                    alt=""
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "60px",
                      background: "white",
                      width: "150px",
                      height: "40px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      padding: "15px",
                      paddingLeft: "25px",
                      fontSize: "15px",
                      fontFamily: "roboto",
                      background:'rgb(68, 69, 69)',
                      color:'white'
                     
                    }}
                  >
                    Cloud Services
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      height: "180px",
                      padding: "10px",
                      border: "none",
                    }}
                    src={Service2}
                    alt=""
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "60px",
                      background: "white",
                      width: "150px",
                      height: "40px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      padding: "15px",
                      paddingLeft: "25px",
                      fontSize: "15px",
                      fontFamily: "roboto",
                      color:"rgb(68, 69, 69)"
                    }}
                  >
                    ERP Integration
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      height: "150px",
                      padding: "10px",
                      border: "none",
                    }}
                    src={Service3}
                    alt=""
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "7px",
                      left: "60px",
                      background: "white",
                      width: "150px",
                      height: "50px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      padding: "15px",
                      paddingLeft: "25px",
                      fontSize: "15px",
                      fontFamily: "roboto",
                      textAlign: "center",
                      color:"rgb(68, 69, 69)"
                    }}
                  >
                    Digital Transformation
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      height: "152px",
                      padding: "10px",
                      width: "250px",
                      border: "none",
                    }}
                    src={Servcies4}
                    alt=""
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "7px",
                      left: "60px",
                      background: "white",
                      width: "150px",
                      height: "40px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      padding: "15px",
                      paddingLeft: "28px",
                      fontSize: "15px",
                      fontFamily: "roboto",
                      color:"rgb(68, 69, 69)"
                    }}
                  >
                    Salesforce
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
       
        <div
          style={{
            background: "rgb(68, 69, 69)",
          }}
        >
          <div
            style={{
              padding: "50px",
            }}
          >
            <div class="grid-container">
              <div
                style={{
                  backgroundColor: "rgb(68, 69, 69)",
                }}
                class="item item1"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Roboto",
                    display: "flex",
                  }}
                >
                  Cloud Services
                </h1>
                <hr class="line2"></hr>

                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "justify",
                    fontFamily: "Roboto",
                    color: "white",
                    marginTop:'10px'

                  }}
                >
                  Vyadom’s cloud consulting services can direct you through best
                  practices, so you can get the most out of the cloud!
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "justify",
                  color: "white",
                  fontFamily: "Roboto",
                  borderRadius:'22px'
                }}
                class="item item2"
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  Azure
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  As more businesses migrate to the cloud and invest in
                  Microsoft technologies, they are looking for certified
                  specialists to help them navigate the complexity of Microsoft
                  Azure. To select the proper service elements and set them
                  properly, customers still need experience. Our managed
                  services for Microsoft Azure allow clients to take advantage
                  of agile consumption-based models and consume Azure services
                  with ease.
                </p>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "justify",
                  color: "white",
                  borderRadius:'22px'

                }}
                class="item item3"
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  AWS
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  With more than 200 featured resources, from infrastructure to
                  machine learning, Amazon Web Services (AWS) is the largest
                  cloud computing platform. These modular solutions combine
                  optimum usability with speed optimization for your application
                  through features for content delivery, data storage, and more.
                  With AWS, you only pay for the precise amount of assistance
                  you need, resulting in a reduced capital commitment and a
                  faster time to value without sacrificing productivity. By
                  launching the first cloud computing service, Amazon EC2, in
                  2008, the leading cloud vendor Amazon made history. The AWS
                  Console, which allows users to centrally manage their
                  services, is accessible to free users, and the company offers
                  more features and solutions than any other supplier.
                </p>
              </div>
            </div>

            <div class="grid-container2">
              <div
                style={{
                  backgroundColor: "rgb(68, 69, 69)",
                  alignContent: "center",
                  fontFamily: "Roboto",
                }}
                class="itm1"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    color: "white",
                    display: "flex",
                  }}
                >
                  ERP Integration
                </h1>
                <hr class="line2"></hr>

                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "justify",
                    color: "white",
                    fontFamily: "Roboto",
                    marginTop: "10px",
                  }}
                >
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
              <div
                className="background_img_div"
                style={{
                  backgroundColor: "rgb(68, 69, 69)",
                  display: "flex",
                  position: "relative",

                  color: "white",
                  fontFamily: "Roboto",
                }}
                class="itm2"
              >
                {/* <h1 style={{
       height:'4vh',
      color:'white'
    }}>Azure</h1> */}
                <div style={{}} className="service_background">
                  <img
                    className="img_background"
                    style={{}}
                    src={background}
                    alt=""
                  />
                  <div className="inner__text">
                    <h1 className="dynamic" style={{}}>
                      Dynamics
                    </h1>
                    <div
                      style={{
                        background: "#229958",
                        marginTop: "20px",
                        height: "40px",
                        borderBottomRightRadius: "70px",
                        fontFamily: "Roboto",
                      }}
                    >
                      <img
                        className="back_img"
                        style={{
                          width: "1.6vw",
                        }}
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  fontFamily: "Roboto",
                  borderRadius:'22px'
                }}
                class="itm3"
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  Infor
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Discover more about infor. With our industry-leading solution
                  for integrating Infor’s sector-specific ERP with your
                  e-commerce, CRM, PIM, and other technologies, you can
                  eliminate manual effort and increase productivity.
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  fontFamily: "Roboto",
                  borderRadius:'22px'
                }}
                class="itm4"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  SAP
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  One of the most popular enterprises resource planning (ERP)
                  tools worldwide is SAP. Such software enables complete
                  operational optimization of corporate processes. Its use is
                  essentially required for large businesses because it is the
                  sole means of preserving true control over internal
                  operations. SAP streamlines and simplifies the management of
                  many company operations.For instance, you can: Maintain
                  financial and tax compliance,Track costs,Use it as a resource
                  for managing human resources, Organize your work,Control the
                  quality of your products,Making reports ,Analyze the results
                  of your business,Control sales & Keep track of how things are
                  made.
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  fontFamily: "Roboto",
                  borderRadius:'22px'
                }}
                class="itm5"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  Oracle
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Nearly every industry and business of any size can benefit
                  from Oracle’s ERP software, which includes JD Edwards, ERP
                  Cloud, and NetSuite. ERP implementation benefits businesses by
                  improving access to precise data, integrating fragmented
                  systems, managing
                </p>
              </div>
            </div>
            <div class="grid-container3">
              <div
                style={{
                  color: "white",
                  backgroundColor: "rgb(68, 69, 69)",
                  
                }}
                class="item31"
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Roboto",
                    display: "flex",
                  }}
                >
                  Digital Transformation
                </h1>
                <hr class="line2"></hr>

                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "justify",
                    color: "white",
                    backgroundColor: "rgb(68, 69, 69)",
                    fontFamily: "Roboto",
                    marginTop: "10px",
                  }}
                >
                  Although change has always been an aspect of business, it is
                  happening more quickly now. Multi-year programs for digital
                  transformation are no longer an option in the modern company
                  environment. The day will be ruled by speed, agility, and
                  momentum.
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  fontFamily: "Roboto",
                  borderRadius:'22px'
                }}
                class="item32"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Migration From Legacy Systems
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  We have an outmoded piece of computing gear or software that
                  is still in use and is referred to as a legacy system. These
                  systems are often built on outdated, out-of-date technologies,
                  even though they may still function as intended and satisfy
                  the needs for which they were initially intended. An outdated
                  IT system, or legacy system, is transferred to a more modern
                  hardware or software platform during a legacy system
                  migration.
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  borderRadius:'22px'
                }}
                class="item33"
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  {" "}
                  Conversion to Cloud
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Moving data and applications to cloud (online) environments
                  can be summed up as cloud transformation. Moving data from one
                  location, one format, or one application to another is
                  referred to as data migration. These days, companies
                  frequently begin data mig
                </p>
              </div>
            </div>
            <div class="grid-container4">
              <div
                style={{
                  backgroundColor: "rgb(68, 69, 69)",
                  color: "white",
                }}
                class="item41"
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "white",
                    display: "flex",
                  }}
                >
                  Salesforce
                </h1>
                <hr class="line2"></hr>

                <p
                  style={{
                    fontSize: "14px",
                    textAlign: "justify",
                    color: "white",
                    backgroundColor: "rgb(68, 69, 69)",
                    marginTop: "10px",
                  }}
                >
                  Salesforce offers easy, strong, and secure application
                  programming interfaces (API) for programmatic access to the
                  data. Use clicks or code to integrate your apps with systems
                  and data sources. Discover a variety of APIs, platform events,
                  integration technical
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  color: "white",
                  borderRadius:'22px'
                }}
                class="item42"
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Integration-API
                </h1>

                <p
                  style={{
                    marginTop: "40px",
                  }}
                >
                  API integration is the link between two or more programs
                  through their APIs (application programming interfaces), which
                  enables systems to exchange data sources. To keep data
                  synchronized, increase productivity, and generate income, API
                  interfaces enable a
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  textAlign: "justify",
                  color: "white",
                  borderRadius:'22px'
                }}
                class="item43"
              >
                <h1
                  style={{
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                 Plug-In Development
                </h1>
                <p
                  style={{
                    marginTop: "20px",
                  }}
                >
                  One of the most adaptable web content management systems on
                  the market is WordPress. There are tens of thousands of
                  plugins accessible for your needs in addition to being open
                  source, which enables the incremental extension and business
                  process automation.
            
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
