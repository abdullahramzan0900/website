import React from "react";
import "./Home.css";
import { useState } from "react";
import About from "../ABOUT/About";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import CaseStudies from "../CaseStudies/CaseStudies";
import Contact from "../Contact/Contact";
import Services_detail from "../Services/Services_detail";


let x = 0;

function Home() {
  const [background, Setbackground] = useState("img");
  const array = ["img1", "img2", "img4", "img3"];
  setTimeout(() => {
    Setbackground(array[x]);
    if (x == 3) {
      x = 0;
    }
    x++;
  }, 5000);

  return (
    <>
      <div className="banner ">
        <div className={background}></div>
        {/* <img src={banner} alt="loading"/> */}

        <div class="centered">
          <h1
            className="height"
            style={{
              fontSize: "40px",
              fontFamily: "roboto",
            }}
          >
            Delivering{" "}
            <span
              style={{
                color: "#229958",
                fontSize: "40px",
                fontFamily: "roboto",
              }}
            >
              IT Solutions
            </span>{" "}
            That enable you To
            <span
              style={{
                color: "#229958",
                fontSize: "40px",
                fontFamily: "roboto",
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
              fontSize: "2vh",
              fontFamily: "roboto",
            }}
          >
            Connecting industry needs with Innovation, Excellence, & IT .We
            create IT solutions that are easy to use, easy to manage, and easy
            to trust.
          </p>

          <div className="btns">
            <button className="btn_contact">Contact us</button>
            <button className="btn_learn">Learn more</button>
          </div>
          <div style={{}}>
            <button
              // onClick={() => {
              //   Setbackground("img");
              //   x=0;
              // }}
              style={{
                background: "rgb(34, 153, 88)",

                marginTop: "50px",
                width: "45px",
                height: "10px",
                borderRadius: "22px",
                border: "none",
              }}
            ></button>
            <button
              // onClick={() => {
              //   Setbackground("img2");
              //   x=1;
              // }}
              style={{
                background: "rgb(34, 153, 88)",
                width: "20px",
                height: "10px",
                borderRadius: "22px",
                border: "none",
                marginLeft: "8px",
              }}
            ></button>
            <button
              // onClick={() => {
              //   Setbackground("img3");
              //   x=2;
                
              // }}
              style={{
                background: "rgb(34, 153, 88)",
                height: "10px",
                width: "20px",
                borderRadius: "22px",
                border: "none",
                marginLeft: "8px",
              }}
            ></button>
            <button
              // onClick={() => {
              //   Setbackground("img4");
              //   x=3;
              // }}
              style={{
                background: "rgb(34, 153, 88)",
                height: "10px",
                width: "20px",
                borderRadius: "22px",
                border: "none",
                marginLeft: "8px",
              }}
            ></button>
          </div>
        </div>
        <About />
        <Services/>
        <Services_detail/>
        <Blogs />
        <CaseStudies />
        <Contact />
      </div>
    </>
  );
}
export default Home;
