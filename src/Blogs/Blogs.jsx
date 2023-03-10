import React from "react";
import "./Blogs.css";
import Blog1 from "../image/Blog1.png";
import Blog2 from "../image/Blog2.png";
import Blog3 from "../image/Blog3.png";
import Blog4 from "../image/Blog4.png";
import line8 from "../image/Line8.png";
import Blog5 from '../image/techno.jpg'
import Blog6 from '../image/imageee.jpg'
import Blog7 from '../image/image3.jpg'
import Blog8 from '../image/images5.jpg'
import Test from "./Test";



import { useState } from "react";

let x = 1;
function Blogs() {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 3 },
  ];
  const array1 = [
    { id: 1, img: Blog1, h1: "Cloud Computing & its Benefits" },
    { id: 1, img: Blog2, h1: "Impact of ERP in SME" },
    { id: 1, img: Blog3, h1: "Digital Transformation & IoT" },
    { id: 1, h1: "Technology in 2023", img: Blog4 },
    { id: 2, h1: "Technology in 2023", img: Blog5 },
    { id: 2, img: Blog6, h1: "Digital Transformation & IoT" },
    { id: 2, img: Blog7, h1: "Cloud Computing & its Benefits" },
    { id: 2, img: Blog8, h1: "Impact of ERP in SME" },
    {
      id: 3,
      img: Blog2,
      h1: "Digital Transformation & IoT",
    },
    { id: 3, img: Blog1, h1: "Impact of ERP in SME" },
    { id: 3, img: Blog5, h1: "Impact of ERP in SME" },
    { id: 3, img: Blog4, h1: "Impact of ERP in SME" },
  ];

  const [Array, Setarray] = useState(array1);
  const [id, Setid] = useState(x);

  return (
    <>
      <div>
        <div
          className="blog_height"
          style={{
            paddingTop: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
            }}
          >
            Blogs
          </h1>
          <img
            style={{
              width: "130px",
              padding: "15px",
            }}
            src={line8}
            alt=""
          />
        </div>
        <div className="Main_div">
          <div class="containers">
            <Test />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
export default Blogs;
