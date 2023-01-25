import React from "react";
import Home from "./Home/Home";
import { Link } from "react-router-dom";

import { useState } from "react";
import Logo from "./image/Logo.svg";
import menubar from "./image/menu-bar.png";
import "@fontsource/roboto";
import { useLocation } from "react-router-dom";
function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  console.log(location,"location")
  console.log(location);
  const { pathname } = location;
  console.log(pathname);
  const splitLocation = pathname.split("/");
  console.log(splitLocation,"aa")
  
  return (
    <>
      <nav className="navigation">
        <img
          style={{
            marginLeft: "60px",
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
          <img
            style={{
              width: "20px",
            }}
            src={menubar}
            alt=""
          />
        </div>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a
                style={{
                  color: splitLocation[1] === "" ? "#23a55b" : "black",
                }}
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a style={{
                  color: splitLocation[1] === "Services" ? "#23a55b" : "black",
              }} href="/Services">Services</a>
            </li>
            <li>
              <a style={{
                 color: splitLocation[1] === "Blogs" ? "#23a55b" : "black",
              }} href="/Blogs">Blog</a>
            </li>
            <li>
              <a style={{
                   color: splitLocation[1] === "CaseStudies" ? "#23a55b" : "black",
              }} href="/CaseStudies">Case Studies</a>
            </li>
            <li>
              <a style={{
               color: splitLocation[1] === "contact" ? "#23a55b" : "black",
              }} href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
