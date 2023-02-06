import React, { useEffect, useState } from "react";
import img from "../image/Services_detail_img.png";
import aws from "../image/aws.png";
import dynamic from "../image/dynamic.png";
import infor from "../image/infor.png";
import sap from "../image/sap.png";
import oracle2 from "../image/oracle2.png";
import migration from "../image/migration.png";
import cloud from "../image/cloud.png";
import integration from "../image/integration.png";
import search_upper from "../image/serach_upper.png";
import search from "../image/search_services.png";
import Contact from "../Contact/Contact";
import { StepContent } from "@mui/material";

function Services_detail() {
  const [data, showData] = useState(false);
  const [data1, showData1] = useState(false);
  const [data2, showData2] = useState(false);
  const [data3, showData3] = useState(false);
  const [data4, showData4] = useState(false);
  const [data5, showData5] = useState(false);
  const [data6, showData6] = useState(false);
  const [data7, showData7] = useState(false);
  const [data8, showData8] = useState(false);
  const [data9, showData9] = useState(false);

  const handleClick = () => {
    showData(!data);

    console.log("aaaa");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Servicesbackground"></div>
      <div class="centered_Service">
        <h1
          className="height"
          style={{
            fontSize: "70px",
            fontFamily: "roboto",
            color: "black",
          }}
        >
          Our
          <span
            style={{
              color: "#229958",
            }}
          >
            {" "}
            Services
          </span>{" "}
        </h1>
        <p
          className="p1"
          style={{
            color: "grey",
            marginTop: "40px",
            fontSize: "13px",
            fontFamily: "roboto",
            lineHeight: "30px",
            width: "61%",
            marginLeft: "1%",
          }}
        >
          Connecting industry needs wi th Innovation, Excellence, & IT .We
          create IT solutions that are easy to use, easy to manage, and easy to
          trust.
        </p>

        <div style={{}}></div>
      </div>

      <div className="Services_detail">
        <div className="CloudServices">
          <div className="CloudServices_div2">
            <div className="outer_upper_div">
              <div className="CloudServices_div2_1">
                <h1 className="h1_servcies_detail">Cloud Services</h1>
                <hr className="line_Services-detail" style={{}}></hr>

                <p className="p_servcies_detail">
                  Vyadoms cloud consulting services can direct you through best
                  practices, so you can get the most out of the cloud!
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data1 && (
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={img}
                    alt=""
                  />
                  <div
                    onClick={() => {
                      showData1(!data1);
                    }}
                    className="search_div"
                  >
                    <h1 className="h1_search_div" style={{}}>
                      AZURE
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img className="search_icon" src={search} alt="" />
                    </div>
                  </div>
                </div>
              )}
              {data1 && (
                <div
                  onClick={() => {
                    showData1(!data1);
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData1(!data1);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      AZURE
                    </h2>
                    As more businesses migrate to the cloud and invest in
                    Microsoft technologies, they are looking for certified
                    specialists to help them navigate the complexity of
                    Microsoft Azure. To select the proper service elements and
                    set them properly, customers still need experience. Our
                    managed services for Microsoft Azure allow clients to take
                    advantage of agile consumption-based models and consume
                    Azure services with ease.
                  </div>
                </div>
              )}

              {!data && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={aws}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      AWS
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          handleClick();
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data && (
                <div
                  onClick={() => {
                    showData(!data);
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData(!data);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      AWS
                    </h2>
                    With more than 200 featured resources, from infrastructure
                    to machine learning, Amazon Web Services (AWS) is the
                    largest cloud computing platform. These modular solutions
                    combine optimum usability with speed optimization for your
                    application through features for content delivery, data
                    storage, and more. With AWS, you only pay for the precise
                    amount of assistance you need, resulting in a reduced
                    capital commitment and a faster time to value without
                    sacrificing productivity.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="CloudServices">
          <div className="CloudServices_div2">
            <div className="outer_upper_div">
              <div className="CloudServices_div2_1">
                <h1 className="h1_servcies_detail">ERP Integration</h1>
                <hr className="line_Services-detail" style={{}}></hr>
                <p className="p_servcies_detail">
                  The simplest way to define ERP (Enterprise resource planning)
                  is as a comprehensive business system that will meet the needs
                  of the company’s management information. All firms benefit
                  from having effective ERP and accounting systems, but
                  utilizing these financial tools to their full potential can
                  have a significant impact. You may count on us to provide you
                  with effective financial systems as a customer. With our
                  professional knowledge and adaptable tools in ERP, HR,
                  payroll, and reporting, we help you. Whether you have a
                  straightforward operation, more intricate manufacturing and
                  logistics, or difficult project management, we assist you in
                  finding the optimal digital solution. We operate with a
                  variety of ERP systems, including IFS Applications, Microsoft
                  Dynamics, Infor, SAP, Oracle, and Odoo to mention a few due to
                  our strong ERP vendor agnosticism. Our highly skilled staff
                  combines specialized development and supplemental solutions
                  with user-centered design to deliver the desired outcome for
                  our clients. We work with customers outside of business
                  systems and use the newest technology to enhance business
                  procedures, creating opportunities for automation that will
                  foster innovation at work.
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data2 && (
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={dynamic}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Dynamics
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData2(!data2);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data2 && (
                <div
                  onClick={() => {
                    showData2(!data2);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData2(!data2);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Dynamics
                    </h2>
                    The most comprehensive business software system currently
                    available is Dynamics. Microsoft Dynamics 365 is a
                    cloud-based ERP and CRM system that may assist you in
                    managing your business and achieving successful outcomes
                    based on AI and real-time insights.
                  </div>
                </div>
              )}
              {!data3 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={infor}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Infor
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData3(!data3);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data3 && (
                <div
                  onClick={() => {
                    showData3(!data3);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData3(!data3);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Infor
                    </h2>
                    Discover more about infor. With our industry-leading
                    solution for integrating Infor's sector-specific ERP with
                    your e-commerce, CRM, PIM, and other technologies, you can
                    eliminate manual effort and increase productivity.
                  </div>
                </div>
              )}

              {!data4 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={aws}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      SAP
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData4(!data4);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data4 && (
                <div
                  onClick={() => {
                    showData4(!data4);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData4(!data4);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      SAP
                    </h2>
                    One of the most popular enterprise resource planning (ERP)
                    tools worldwide is SAP. Such software enables complete
                    operational optimization of corporate processes. Its use is
                    essentially required for large businesses because it is the
                    sole means of preserving true control over internal
                    operations. SAP streamlines and simplifies the management of
                    many company operations.
                  </div>
                </div>
              )}
              {!data5 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={oracle2}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Oracle
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData5(!data5);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data5 && (
                <div
                  onClick={() => {
                    showData5(!data5);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData5(!data5);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Oracle
                    </h2>
                    Nearly every industry and business of any size can benefit
                    from Oracle's ERP software, which includes JD Edwards, ERP
                    Cloud, and NetSuite. ERP implementation benefits businesses
                    by improving access to precise data, integrating fragmented
                    systems, managing business growth better, increasing
                    customer happiness, and lowering expenses. Business
                    executives can operate their organization profitably and
                    efficiently with the help of Oracle enterprise software
                    solutions, which offer a single source of truth.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="CloudServices">
          <div className="CloudServices_div2">
            <div className="outer_upper_div">
              <div className="CloudServices_div2_1">
                <h1 className="h1_servcies_detail">Digital Transformation</h1>
                <hr className="line_Services-detail" style={{}}></hr>

                <p className="p_servcies_detail">
                  Although change has always been an aspect of business, it is
                  happening more quickly now. Multi-year programs for digital
                  transformation are no longer an option in the modern company
                  environment. The day will be ruled by speed, agility, and
                  momentum.
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data6 && (
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={migration}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Migration From Legacy System
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData6(!data6);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data6 && (
                <div
                  onClick={() => {
                    showData6(!data6);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData6(!data6);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Legacy Migrations
                    </h2>
                    We have an outmoded piece of computing gear or software that
                    is still in use and is referred to as a legacy system. These
                    systems are often built on outdated, out-of-date
                    technologies, even though they may still function as
                    intended and satisfy the needs for which they were initially
                    intended. An outdated IT system, or legacy system, is
                    transferred to a more modern hardware or software platform
                    during a legacy system migration.
                  </div>
                </div>
              )}

              {!data7 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={cloud}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Conversion to cloud
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData7(!data7);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data7 && (
                <div
                  onClick={() => {
                    showData7(!data7);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData7(!data7);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Conversion to Cloud
                    </h2>
                    Moving data and applications to cloud (online) environments
                    can be summed up as cloud transformation. Moving data from
                    one location, one format, or one application to another is
                    referred to as data migration. These days, companies
                    frequently begin data migrations as they switch from
                    on-premises infrastructure and applications to cloud-based
                    storage and apps in an effort to optimize or change their
                    business.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="CloudServices">
          <div className="CloudServices_div2">
            <div className="outer_upper_div">
              <div className="CloudServices_div2_1">
                <h1 className="h1_servcies_detail">Salesforce</h1>
                <hr className="line_Services-detail" style={{}}></hr>

                <p className="p_servcies_detail">
                  Salesforce offers easy, strong, and secure application
                  programming interfaces (API) for programmatic access to the
                  data. Use clicks or code to integrate your apps with systems
                  and data sources. Discover a variety of APIs, platform events,
                  integration techniques, and declarative tools, including Apex
                  utilities.
                </p>
              </div>
            </div>

            <div className="upper_second_div">
              {!data8 && (
                <div className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={integration}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Integration-Api
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData8(!data8);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data8 && (
                <div
                  onClick={() => {
                    showData8(!data8);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData8(!data8);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Integration API
                    </h2>
                    API integration is the link between two or more
                    programs through their APIs (application programming
                    interfaces), which enables systems to exchange data sources.
                    To keep data synchronized, increase productivity, and
                    generate income, API interfaces enable activities across
                    numerous departments and organizational levels.
                  </div>
                </div>
              )}
              {!data9 && (
                <div style={{}} className="CloudServices_div2_1">
                  <img
                    className="img_service_detail"
                    style={{}}
                    src={img}
                    alt=""
                  />
                  <div className="search_div">
                    <h1 className="h1_search_div" style={{}}>
                      Plug-In Development
                    </h1>

                    <div className="search_upper_div">
                      <img
                        className="search_upper_img"
                        src={search_upper}
                        alt=""
                      />
                      <img
                        onClick={() => {
                          showData9(!data9);
                        }}
                        className="search_icon"
                        src={search}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {data9 && (
                <div
                  onClick={() => {
                    showData9(!data9);
                    console.log("aaa");
                  }}
                  style={{
                    backgroundColor: "rgb(34, 153, 88)",
                  }}
                  className="CloudServices_div2_1"
                >
                  <img
                    onClick={() => {
                      showData9(!data9);
                      console.log("aa");
                    }}
                    className="img_service_detail"
                    style={{
                      opacity: "0",
                    }}
                    src={aws}
                    alt=""
                  />

                  <div className="changed_div" style={{}}>
                    <h2 className="changed_div_h1" style={{}}>
                      Plug-in Development
                    </h2>
                    One of the most adaptable web content management systems on
                    the market is WordPress. There are tens of thousands of
                    plugins accessible for your needs in addition to being open
                    source, which enables the incremental extension and business
                    process automation.

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
export default Services_detail;
