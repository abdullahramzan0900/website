import React from "react";
import "./Contact.css";
import partner from "../image/Partners.png";
import microsoft from "../image/microsoft.png";
import Oracle from "../image/Oracle.png";
import line8 from "../image/Line8.png";
import Logo from "../image/Logo.svg";
import fb from "../image/fb.png";
import insta from "../image/insta.png";
import tw from "../image/tw.png";
import lk from "../image/lk.png";
import { width } from "@mui/system";

function Contact() {
  return (
    <>
      <div className="contact_main">
        <div>
          <img src={partner} alt="" />

          <div>
            <img src={line8} alt="" />
          </div>
        </div>

        <p
          style={{
            fontSize: "2vh",
          }}
        >
          Trusted by more than 5,000 businesses in 122 countries.
        </p>
        <div className="contact_images">
          <img
            style={{
              marginTop: "20px",
              width: "17vw",
              height: "8vh",
            }}
            src={Oracle}
            alt=""
          />
          <img
            style={{
              marginTop: "20px",
              width: "30vw",
              height: "10vh",
            }}
            src={microsoft}
            alt=""
          />
        </div>
      </div>
      <div className="contact2">
        <div
          style={{
            width: "20vw",       
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
         
        
         

          }}
        >
          <img style={{
            width:'15vw'
          }} src={Logo} alt="" />
          <p style={{
           
            fontSize:'1.6vh',
         
          }}>
            We provide IT services with the goal of delivering business
            solutions to customers worldwide. We aim to meet the expectations of
            our clients and explain the best strategies that take their projects
            to a higher level.
          </p>
          <p style={{
            fontSize:'1.6vh',
          
          }}>Dubai Silicon Oasis, DDP Building A2, Dubai UAE</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          alignItems:'center',
          justifyContent:'center',
            color: "white",
            
          }}
        >
          <p style={{
              color: "white",
              textDecoration:'none',
              fontSize:'2vh',
              marginTop:'15px'
            }}>Services</p>
          <a
            style={{
              color: "white",
              textDecoration:'none',
              fontSize:'2vh',
              marginTop:'15px'

            }}
            href=""
          >
            Cloud services
          </a>
          <a
            style={{
              color: "white",
              textDecoration:'none',
              fontSize:'2vh',
              marginTop:'15px'
            }}
            href=""
          >
            ERP Integration
          </a>
          <a
            style={{
              color: "white",
              textDecoration:'none',
              fontSize:'1.5vh',
              marginTop:'15px'
            }}
            href=""
          >
            Digital Tranformation
          </a>
          <a
            style={{
              color: "white",
              textDecoration:'none',
              fontSize:'1.5vh',
              marginTop:'15px'
              

            }}
            href=""
          >
            Salesforce
          </a>
        </div>
        <div  style={{
              display: "flex",
              flexDirection: "column",
           justifyContent:'center'
      
            
            }}>
          <p style={{
            color:'white',
            fontSize:"2vh",
           
        
         
        
          }}></p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
      
            
            }}
          >
            <img
              style={{
                width: "15px",
           
              
              }}
              src={fb}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop:'10px'
              
               
              }}
              src={insta}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop:'10px'
              
               
              }}
              src={tw}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop:'10px'
               

              }}
              src={lk}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            color: "white",
            margin:'5px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
          }}
        >
          <p>Send mail</p>
          
          <div>
       <input placeholder="email" style={{
        width:'7vw',
        marginTop:'20px'
       }}/>
       <div>

            <button style={{
                width:'7vw',
                height:'4vh',
               textAlign:'center',
               background:'#229958',
               borderRadius:'22px',
               marginTop:'20px'
            }}>Subscribe</button>
       </div>
          </div>
        </div>

      </div>
      <div style={{
           background:'black',
           width:'100%',
           height:'5vh',
           display:'flex',
           justifyContent:'center',
           color:'white',
           fontSize:'1vw'
        

      }}>
        <p>CopyrightⒸ2022,Vyadom</p>
      </div>
    </>
  );
}
export default Contact;
