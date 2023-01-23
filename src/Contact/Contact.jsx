import React from "react";
import "./Contact.css";
import partner from "../image/Partners.png";
import microsoft from "../image/microsoft.png";
import Oracle from "../image/Oracle.png";

import Logo from "../image/Logo.svg";
import fb from "../image/fb.png";
import insta from "../image/insta.png";
import tw from "../image/tw.png";
import lk from "../image/lk.png";
import logoicon from "../image/Logo-icon.svg";

function Contact() {
  return (
    <>
      <div
        style={{
          fontFamily: "roboto",
        }}
        className="contact_main"
      >
        <div>
          <img
            style={{
              width: "200px",
            }}
            src={partner}
            alt=""
          />

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
          <img className="logoiconn" style={{}} src={logoicon} alt="" />
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
              color: "white",
              textDecoration: "none",
              fontSize: "2vh",
              marginTop: "15px",
              fontWeight: "bold  ",
            }}
          >
            Services
          </p>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "2vh",

              marginTop: "15px",
            }}
            href=""
          >
            Cloud services
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "2vh",
              marginTop: "15px",
            }}
            href=""
          >
          ERP Integration
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "2vh",
              marginTop: "15px",
            }}
            href=""
          >
            Digital Tranformation
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "2vh",
              marginTop: "15px",
            }}
            href=""
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
              color:'white',
              fontSize:'2vh',
              fontWeight:'bold'
            }}>Follow Us </h1>
            <img
              style={{
                width: "12px",
                cursor: "pointer",
                marginTop:'20px',
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
              marginLeft: "4px",
            }}
          >
            Send Mail
          </p>

          <div>
            <input
              placeholder="Email"
              style={{
                width: "150px",
                marginTop: "5px",

                borderRadius: "7px",
                height: "33px",
                border:'none',
                marginTop:'10px'
              }}
            />
            <div>
              <button
                style={{
                  width: "80px",
                  height: "30px",
                  textAlign: "center",
                  background: "#229958",
                  borderRadius: "7px",
                  marginTop: "5px",
                  marginLeft: "2px",
                  border:'none',
                  marginTop:'10px'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact2_5" style={{}}>
        <p>CopyrightⒸ2022,Vyadom</p>
      </div>
    </>
  );
}
export default Contact;
