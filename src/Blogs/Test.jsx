import React from "react";
import "./Blogs.css";
import Blog1 from "../image/Blog1.png";
import Blog2 from "../image/Blog2.png";
import Blog3 from "../image/Blog3.png";
import Blog4 from "../image/Blog4.png";
import path26 from "../image/Path26.png";
import path27 from "../image/Path27.png";
import line8 from "../image/Line8.png";
import Carousel from "react-elastic-carousel";

function Test() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
  ];
  const array1 = [
    { id: 1, img: Blog1, h1: "Cloud Computing & its Benefits" },
    { id: 1, img: Blog2, h1: "Impact of ERP in SME" },
    { id: 1, img: Blog3, h1: "Digital Transformation & IoT" },
    { id: 1, h1: "Technology in 2023", img: Blog4 },
    { id: 2, h1: "Technology in 2023", img: Blog4 },
    { id: 2, img: Blog3, h1: "Digital Transformation & IoT" },
    { id: 2, img: Blog1, h1: "Cloud Computing & its Benefits" },
    { id: 2, img: Blog2, h1: "Impact of ERP in SME" },
    {
      id: 3,
      img: Blog3,
      h1: "Digital Transformation & IoT",
    },
    { id: 3, img: Blog2, h1: "Impact of ERP in SME" },
    { id: 3, img: Blog1, h1: "Impact of ERP in SME" },
    { id: 3, img: Blog4, h1: "Impact of ERP in SME" },
  ];

  return (
    <>
      <div
        style={{
          padding: "40px",
        }}
      >
        <Carousel breakPoints={breakPoints}>
          {array1 &&
            array1?.map((item) => {
              return (
                <div className="itemm">
                  <img
                    className="Blog_img_style"
                    style={{}}
                    src={item.img}
                    alt=""
                  />

                  <h1>{item.h1}</h1>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
export default Test;
