import React from "react";
import Home from "./Home/Home";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";
import Logo from "./image/Logo.svg";
import menubar from "./image/menu-bar.png";
import "@fontsource/roboto";
import { useLocation } from "react-router-dom";
import cross_nav from './image/crosss.png'

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate=useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  
  return (
    <>
      <nav className="navigation">
        <img onClick={()=>{
        navigate('/');
        }}
          style={{
            marginLeft:"4%",
            cursor:'pointer'
          }}
          className="logo_img"
          src={Logo}
          alt="loading"
        />

        <div
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="menunav"
        >
          {  !isNavExpanded && 
            <img
            style={{
              width: "20px",
            }}
            src={menubar}
            alt=""
          />
}
{  isNavExpanded && 
            <img
            style={{
              padding:'0px',
              width: "20px",
              marginBottom:'40px'
            }}
            src={cross_nav}
            alt=""
          />
}
        </div>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul style={{
            border:'none'
          }}
          >
            <li>
              <a onClick={()=>{
                navigate('./')
                setIsNavExpanded(!isNavExpanded)
              }}
                style={{
                  color: splitLocation[1] === "" ? "#23a55b" : "black",
                  cursor:'pointer'
                }}
                
              >
                Home
              </a>
            </li>

            <li>
              <a  onClick={()=>{
                navigate('/Services')
                setIsNavExpanded(!isNavExpanded)
              }} style={{
                  color: splitLocation[1] === "Services" ? "#23a55b" : "black",
                  cursor:'pointer'
             
              }} >Services</a>
            </li>
            <li>
              <a  onClick={()=>{
                navigate('/Blogs')
                setIsNavExpanded(!isNavExpanded)
              }} style={{
                 color: splitLocation[1] === "Blogs" ? "#23a55b" : "black",
                 cursor:'pointer'
      
              }}>Blogs</a>
            </li>
            <li>
              <a  onClick={()=>{
                navigate('/CaseStudies')
                setIsNavExpanded(!isNavExpanded)
              }} style={{
                   color: splitLocation[1] === "CaseStudies" ? "#23a55b" : "black",
                   cursor:'pointer'
        
              }} >Case Studies</a>
            </li>
            <li>
              <a  onClick={()=>{
                navigate('/Contact')
                setIsNavExpanded(!isNavExpanded)
              }} style={{
               color: splitLocation[1] === "contact" ? "#23a55b" : "black",
               cursor:'pointer'

              }} >Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
