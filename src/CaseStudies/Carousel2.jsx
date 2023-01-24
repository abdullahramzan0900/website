import React from "react";
import Carousel from "react-elastic-carousel";
import "./CaseStudies.css";
import { Navigate, useNavigate } from "react-router-dom";
function Carousel2() {
  const navigate=useNavigate();
  const array1 = [
    {
      id: 1,

      h1: "ERP for Restaurant",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "Read More",
    },
    {
      id: 1,
      h1: "Odoo SME",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "Read More",
    },
    {
      id: 1,
      h1: "Dynamics",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",

      h2: "Read More",
    },
    {
      id: 2,
      h1: "API Integration",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "Read More",
    },
    {
      id: 2,
      h1: "Customized reporting  with SAP ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "Read More",
    },
    {
      id: 2,
      h1: "Oracle Deployment ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "Read More",
    },
    {
      id: 3,
      h1: "API Integration",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "Read More",
    },
    {
      id: 3,
      h1: "Customized P ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "Read More",
    },
    {
      id: 3,
      h1: "Oracle Deployment ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "Read More",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 3 },
  ];
  return (
    <>
      <div className="Carousel2_upper" style={{}}>
        <Carousel
          breakPoints={breakPoints}
        >
          {array1 &&
            array1?.map((item) => {
              return (
                <div key={item.id} className="itemm2">
                  <h1 style={{
                    fontSize:'25px'
                  }}>{item.h1}</h1>
                  <p style={{
                      lineHeight:'20px',
                      fontSize:'14px'
                  }}>{item.p}</p>
                  <h4 className="readmore_outercasestudies" onClick={()=>{
                       navigate('/CaseStudies')
                  }} style={{
                    cursor:'pointer',
                    fontSize:'16px'
                  }}>{item.h2}</h4>
                  
              
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
export default Carousel2;
