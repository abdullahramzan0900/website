import React from "react";
import CaseStudies from "../CaseStudies/CaseStudies";
import Contact from "../Contact/Contact";
import { Navigate, useNavigate } from "react-router-dom";
import Blog1 from "../image/Blog1.png";
import Blog2 from "../image/Blog2.png";
import Blog3 from "../image/Blog3.png";
import Blog4 from "../image/Blog4.png";
import line8 from "../image/Line8.png";
import Blog5 from '../image/techno.jpg'
import Blog6 from '../image/imageee.jpg'
import Blog7 from '../image/image3.jpg'
import Blog8 from '../image/images5.jpg'
import cloud from '../image/clouddetail_img.jpg'
function MainBlog() {
  const navigate = useNavigate();
  const array1 = [
    {
      id: 1,
      img: cloud,
      h1: "Cloud Computing & its Benefits",
      p: "If you're still debating whether to adopt cloud migration, you're already behind 90% of businesses. That indicates that enterprise workloads are largely.."
    },
    {
      id: 2,
      img: Blog2,
      h1: "Utilize a user-friendly mobile app to grow your restaurant. ",
      p: "Everything is becoming digitalized in this constantly developing digital age. Almost everything has moved online, ",
    },
    {
      id: 3,
      img: Blog4,
      h1: "Digital Transformation & IoT",
      p: "Digital transformation is the integration of digital solutions to enable an organization to enhance its business, operational, and cultural processes. ",
    },
    {
      id: 4,
      h1: "Technology in 2023",
      img: Blog3,
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely...",
    },
    {
      id: 5,
      h1: "Technology in 2023",
      img: Blog5,
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 6,
      img: Blog6,
      h1: "Digital Transformation & IoT",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 7,
      img: Blog7,
      h1: "Cloud Computing & its Benefits",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 8,
      img: Blog8,
      h1: "Impact of ERP in SME",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
  ];
  return (
    <>
      <div className="img4"></div>
      {/* <img src={banner} alt="loading"/> */}

      <div class="centered_Blog">
        <h1
          className="height_Blog"
          style={{
       
          }}
        >
          The Latest
          <span
            style={{
              color: "#229958",
              fontFamily: "roboto",
            }}
          ></span>{" "}
          <span
            style={{
              color: "#229958",
              fontFamily: "roboto",
            }}
          >
            Ideas
          </span>{" "}
          From
          <span
            style={{
              color: "#229958",
              fontFamily: "roboto",
            }}
          >
            {" "}
            Experts
          </span>{" "}
        </h1>
        <p
          className="p1_Blog"
          style={{
           
          }}
        >
          Connecting industry needs with Innovation, Excellence, & IT .We create
          IT solutions that are easy to use, easy to manage, and easy to trust.
        </p>

        <div style={{}}></div>
      </div>
      <div
        className="blog_height_Main"
        style={{
          padding: "24px",
          fontFamily: "roboto",
        }}
      >
        <h1
          style={{
            fontSize: "5vh",
          }}
        >
          Blogs
        </h1>
        <img
          style={{
            width: "120px",
            marginTop: "15px",
          }}
          src={line8}
          alt=""
        />
      </div>
      <div
        style={{
          backgroundColor: "#23A55B",
          paddingBottom:'60px'
        }}
      >
        <div class="MainBlog-grid">
          {array1?.map((item) => {
            return (
              <div class="Blog-grid-image">
                <div className="inner_Blog-grid" style={{}}>
                  <img
                    style={{
                      width: "300px",
                      height: "250px",
                      borderRadius: "22px",
                      background: "#FFFFFF",
                      fontFamily: "roboto",
                    }}
                    src={item.img}
                  />
                  <div
                    style={{
                      padding: "30px",
                      fontFamily:'roboto'
                    }}
                  >
                    <p
                      className="h_mainblog"
                      style={{
                         textAlign:'center',
                        fontFamily: "roboto",
                         fontSize:'16px'
                      }}
                    >
                      {item.h1}
                    </p>
                    <p className="p_mainblog" style={{}}>
                      {item.p}
                    </p>
                    <button
                      onClick={() => {
                        navigate(`/Blogs/${item.id}`);
                      }}
                      className="mainblog_button_read"
                      style={{
                        cursor: "pointer",
                        background: "none",
                        fontFamily: "roboto",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CaseStudies/>
      <Contact/>
    </>
  );
}
export default MainBlog;



