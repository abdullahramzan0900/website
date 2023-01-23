import React, { useState } from "react";
import "./CaseStudies.css";

import Carousel2 from "./Carousel2";
let z = 1;
function CaseStudies() {
  console.log(z, "z");
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
  const [Array, Setarray] = useState(array1);
  const [id, Setid] = useState(z);

  return (
    <>
      <div>
        <div style={{}}>
          <div className="case_height" style={{}}>
            <h1
              style={{
                fontSize: "35px",
                paddingTop: "25px",
                fontFamily: "roboto",
              }}
            >
              Case Studies
            </h1>
            <hr className="services_hr" style={{}} />
          </div>
          <div className="case_div">
            <div
              style={{
                marginTop: "10px",
              }}
              class="Case_containers"
            >
              <Carousel2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CaseStudies;
