import React from "react";
import CaseStudies from "../CaseStudies/CaseStudies";
import Contact from "../Contact/Contact";
import { Navigate, useNavigate } from "react-router-dom";
import Blog1 from "../image/Blog1.png";
import Blog2 from "../image/Blog2.png";
import Blog3 from "../image/Blog3.png";
import Blog4 from "../image/Blog4.png";
import line8 from "../image/Line8.png";
function MainBlog() {
  const navigate = useNavigate();
  const array1 = [
    {
      id: 1,
      img: Blog1,
      h1: "Cloud Computing & its Benefits",
      p: "If you're still debating whether to adopt cloud migration, you're already behind 90% of businesses. That indicates that enterprise workloads are largely already hosted on the cloud. ",
    },
    {
      id: 2,
      img: Blog2,
      h1: "Grow your restaurant",
      p: "Everything is becoming digitalized in this constantly developing digital age. Almost everything has moved online, from communicating with friends to placing food orders ",
    },
    {
      id: 3,
      img: Blog3,
      h1: " Digital Transformation",
      p: "Digital transformation is the integration of digital solutions to enable an organization to enhance its business, operational, and cultural processes. ",
    },
    {
      id: 4,
      h1: "Technology in 2023",
      img: Blog4,
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 5,
      h1: "Technology in 2023",
      img: Blog4,
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 6,
      img: Blog3,
      h1: "Digital Transformation & IoT",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 7,
      img: Blog1,
      h1: "Cloud Computing & its Benefits",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
    {
      id: 8,
      img: Blog2,
      h1: "Impact of ERP in SME",
      p: "If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses.That indicates that enterprise workloads are largely already hosted on the cloud",
    },
  ];
  return (
    <>
      <div className="img4"></div>
      {/* <img src={banner} alt="loading"/> */}

      <div class="centered">
        <h1
          className="height"
          style={{
            fontSize: "60px",
            fontFamily: "roboto",
          }}
        >
          The Latest
          <span
            style={{
              color: "#229958",
              fontSize: "60px",
              fontFamily: "roboto",
            }}
          ></span>{" "}
          <span
            style={{
              color: "#229958",
              fontSize: "60px",
              fontFamily: "roboto",
            }}
          >
            Ideas
          </span>{" "}
          From
          <span
            style={{
              color: "#229958",
              fontSize: "60px",
              fontFamily: "roboto",
            }}
          >
            {" "}
            Experts
          </span>{" "}
        </h1>
        <p
          className="p1"
          style={{
            color: "#72818b",
            marginTop: "40px",
            fontSize: "2vh",
            fontFamily: "roboto",
            lineHeight: "30px",
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



