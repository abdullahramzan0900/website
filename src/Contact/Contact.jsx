import React from "react";
import "./Contact.css";
import partner from "../image/Partners.png";
import microsoft from "../image/microsoft.png";
import Oracle from "../image/Oracle.png";
import { useLocation } from "react-router-dom";
import Logo from "../image/Logo.svg";
import fb from "../image/fb.png";
import insta from "../image/insta.png";
import tw from "../image/tw.png";
import lk from "../image/lk.png";
import logoicon from "../image/Logo-icon.svg";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate=useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");


  return (
    <>
      <div
        style={{
          fontFamily: "roboto",
        }}
        className="contact_main"
      >
        <div>
       <h1 style={{
        fontSize:'40px'
       }}>Partners</h1>

          <hr className="contact_hr" style={{}} />
        </div>

        <p
          style={{
            fontSize: "2vh",
            fontFamily: "roboto",
          }}
        >
          Trusted by more than 5,000 businesses in 122 countries.
        </p>
        <div className="contact_images">
          <img className="contact_images_1"
            style={{
          
            }}
            src={Oracle}
            alt=""
          />
          <img className="contact_images_2"
            style={{
             
            }}
            src={microsoft}
            alt=""
          />
        </div>
      </div>
      <div className="contact2">
        <div className="contact2_1" style={{}}>
          <img onClick={()=>{
                window.scrollTo(0, 0);
          }} className="logoiconn" style={{
            cursor:'pointer',

          }} src={logoicon} alt="" />
          <p
            style={{
              fontSize: "1.6vh",
              marginTop: "20px",
              fontFamily: "roboto",
              lineHeight: "20px",
            }}
          >
            We provide IT services with the goal of delivering business
            solutions to customers worldwide. We aim to meet the expectations of
            our clients and explain the best strategies that take their projects
            to a higher level.
          </p>
          <p
            style={{
              fontSize: "1.6vh",
              marginTop: "20px",
            }}
          >
            Dubai Silicon Oasis, DDP Building A2, Dubai UAE
          </p>
        </div>
        <div className="contact2_2" style={{}}>
          <p
            style={{
            
              textDecoration: "none",
              fontSize: "2vh",
              marginTop: "15px",
              fontWeight: "bold  ",
              color:'#e2e2e2'
            }}
          >
            Services
          </p>
          <a  onClick={()=>{
       if(window.location)
       if( splitLocation[1] === "Services")
            {
              window.scrollTo(0, 0);
            }else {
              
              navigate('/Services')
            }
          }}
            style={{
              cursor:'pointer',
              textDecoration: "none",
              fontSize: "1.8vh",

          marginTop:'28px',
          color:'#e2e2e2'
            }}
         
          >
            Cloud services
          </a>
          <a onClick={()=>{
     if( splitLocation[1] === "Services")
     {
       window.scrollTo(0, 0);
     }else {
       
       navigate('/Services')
     }
          }}
            style={{
              cursor:'pointer',
              textDecoration: "none",
              fontSize: "1.8vh",
              marginTop: "15px",
              color:'#e2e2e2'
            }}
           
          >
          ERP Integration
          </a>
          <a onClick={()=>{
            if( splitLocation[1] === "Services")
            {
              window.scrollTo(0, 0);
            }else {
              
              navigate('/Services')
            }
          }}
            style={{
              cursor:'pointer',
              textDecoration: "none",
              fontSize: "1.8vh",
              marginTop: "15px",
              color:'#e2e2e2'
            }}
           
          >
            Digital Tranformation
          </a>
          <a onClick={()=>{
        if( splitLocation[1] === "Services")
        {
          window.scrollTo(0, 0);
        }else {
          
          navigate('/Services')
        }
          }}
            style={{
              cursor:'pointer',
              textDecoration: "none",
              fontSize: "1.8vh",
              marginTop: "15px",
              color:'#e2e2e2'
            }}
           
          >
          Salesforce
          </a>
        </div>
        <div className="contact2_3" style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
            }}
          >
            <h1 style={{
       
              fontSize:'2vh',
              fontWeight:'bold'
            }}>Follow Us </h1>
            <img
              style={{
                width: "12px",
                cursor: "pointer",
                marginTop:'19px',
                fontWeight:'bold',
                marginLeft:'20px'
              }}
              src={fb}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop: "10px",
                cursor: "pointer",
                marginLeft:'20px'
              }}
              src={insta}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop: "10px",
                cursor: "pointer",
                marginLeft:'20px'
              }}
              src={tw}
              alt=""
            />
            <img
              style={{
                width: "20px",
                marginTop: "10px",
                cursor: "pointer",
                marginLeft:'20px'
              }}
              src={lk}
              alt=""
            />
          </div>
        </div>
        <div className="contact2_4" style={{}}>
          <p
            style={{
              color:'#e2e2e2',
              fontWeight: "bold  ",
              fontSize:'19px'
            }}
          >
            Send Mail
          </p>

          <div>
            <input
              placeholder="Email"
              style={{
                width: "215px",
                marginTop: "5px",
                padding:'10px',
                borderRadius: "7px",
                height: "38px",
                border:'none',
                marginTop:'40px',
                fontSize:'15px'
              }}
            />
            <div>
              <button
                style={{
                  width: "100px",
                  height: "34px",
                  textAlign: "center",
                  background: "#229958",
                  borderRadius: "7px",
                  marginTop: "5px",
                  marginLeft: "2px",
                  color:"#e2e2e2",
                  border:'none',
                  marginTop:'10px',
                  cursor:'pointer',
                  fontFamily:'roboto'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact2_5" style={{}}>
        <p>CopyrightⒸ2023,Vyadom</p>
      </div>
    </>
  );
}
export default Contact;
