import React from "react";
import Service1 from "../image/cloud.png";
import Service2 from "../image/erp_casestudies_detail.webp";
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
import img2 from '../image/digitalransfrom_detail.jpg'
import salesforce from '../image/salesforce_2.webp'

import "./Services.css";
import { Navigate, useNavigate } from "react-router-dom";

function Services() {
  const navigate=useNavigate();
  return (
    <>
      <div className="main">
        <div class="service_main">
          <div className="Services">
            <div className="Services_inner"
              style={{
           
              }}
            >
              <div style={{}}>
                <h1 className="services_h1">Our Services</h1>
                <hr className="line_Services"></hr>
              </div>

              <p className="service_p">
                We provide quality services to out client that support bussniess
                in developing and implementing ovations solution for performance
                ,growth and relevance
              </p>
              <button onClick={()=>{
                // window.open('/Services','_top');
                navigate("/Services")
          
    
              }} className="Services_button"
                style={{
                    
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
                  <img className="Service1_div" src={Service1} alt="" />
                  <div onClick={()=>{
                      navigate("/Services")
                  }} className="Service1_button">Cloud Services</div>
                </div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img className="Service2_div" src={Service2} alt="" />
                  <div onClick={()=>{
                      navigate("/Services")
                  }} className="Service2_button">ERP Integration</div>
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
                  <img className="Service3_div" src={img2} alt="" />
                  <div onClick={()=>{
                      navigate("/Services")
                  }} className="Service3_button">Digital Transformation</div>
                </div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img className="Service4_div" src={salesforce} alt="" />
                  <div onClick={()=>{
                    
                    navigate("/Services")

                  }} className="Service4_button">Salesforce</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
