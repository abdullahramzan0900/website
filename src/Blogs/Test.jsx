import React from "react";
import "./Blogs.css";
import Blog1 from "../image/Blog1.png";
import Blog2 from "../image/Blog2.png";
import Blog3 from "../image/Blog3.png";
import Blog4 from "../image/Blog4.png";
import cloud from '../image/clouddetail_img.jpg'
import path26 from "../image/Path26.png";
import path27 from "../image/Path27.png";
import line8 from "../image/Line8.png";
import Carousel ,{ consts }from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import Blog5 from '../image/techno.jpg'
import Blog6 from '../image/imageee.jpg'
import Blog7 from '../image/image3.jpg'
import Blog8 from '../image/images5.jpg'

function Test() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500 ,itemsToShow:2},
    { width: 900, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
  ];
  const array1 = [
    { id: 1, img: cloud, h1: "Cloud Computing & its Benefits" },
    { id: 2, img: Blog2, h1: "Utilize a user-friendly mobile app " },
    { id: 3, img: Blog1, h1: "Digital Transformation & IoT" },
    { id: 4, h1: "Technology in 2023", img: Blog4 },
    { id: 6, h1: "Technology in 2023", img: Blog5 },
    { id: 7, img: Blog6, h1: "Digital Transformation & IoT" },
    { id: 8, img: Blog7, h1: "Cloud Computing & its Benefits" },
    { id: 9, img: Blog8, h1: "Impact of ERP in SME" },
    {
      id: 10, img: Blog3, h1: "Digital Transformation & IoT",
    },
    { id:11, img: Blog1, h1: "Impact of ERP in SME" },
    { id: 12, img: Blog5, h1: "Impact of ERP in SME" },
    { id: 13, img: Blog2, h1: "Impact of ERP in SME" },
  ];
  const navigate=useNavigate()


  return (
    <>
      <div className="blog_carousel_upper" style={{
        fontFamily:'roboto'
      }}>
        <Carousel className="carousel" breakPoints={breakPoints}>
          {array1 &&
            array1?.map((item) => {
              return (
                <div className="itemm">
                  <img
                    className="Blog_img_style"
                    style={{}}
                    src={item?.img}
                    alt=""
                  />

                  <h1 onClick={()=>{
                   
                      navigate(`/Blogs/${item.id}`)
                  }}
                    style={{
                      padding: "20px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {item.h1}
                  </h1>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
export default Test;
