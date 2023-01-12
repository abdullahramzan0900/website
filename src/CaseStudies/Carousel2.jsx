import React from "react";
import Carousel from "react-elastic-carousel";
import "./CaseStudies.css";
function Carousel2() {
  const array1 = [
    {
      id: 1,

      h1: "ERP for Restaurant",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "read more",
    },
    {
      id: 1,
      h1: "Odoo SME",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "read more",
    },
    {
      id: 1,
      h1: "Dynamics",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",

      h2: "read more",
    },
    {
      id: 2,
      h1: "API Integration",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "read more",
    },
    {
      id: 2,
      h1: "Customized reporting  with SAP ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "readmore",
    },
    {
      id: 2,
      h1: "Oracle Deployment ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "read more",
    },
    {
      id: 3,
      h1: "API Integration",
      p: "There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
      h2: "read more",
    },
    {
      id: 3,
      h1: "Customized P ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "readmore",
    },
    {
      id: 3,
      h1: "Oracle Deployment ",
      p: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ",
      h2: "read more",
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
            array1.map((item) => {
              return (
                <div key={item.id} className="itemm2">
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                  <h4>{item.h2}</h4>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
export default Carousel2;
