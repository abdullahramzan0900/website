import React from "react";
import img from "../image/Services_detail_img.png";
import aws from "../image/aws.png"
import dynamic from "../image/dynamic.png"
import infor from "../image/infor.png"
import sap from "../image/sap.png"
import oracle2 from "../image/oracle2.png"
import migration from "../image/migration.png"
import cloud from '../image/cloud.png'
import integration from '../image/integration.png'
import search_upper from '../image/serach_upper.png'
import search from '../image/search_services.png'
import Contact from "../Contact/Contact";


function Services_detail() {
    
  return (
    
    <>
  <div  className='Servicesbackground'>
        </div>
<div class="centered">
      <h1  className='height' style={{
        fontSize:'70px',
        fontFamily:'roboto',
        color:'#229958'
        
      }} >Our<span style={{
        color:'#229958'
      }}> Services</span>  </h1>
      <p className='p1' style={{
         color:'grey',
         marginTop:"40px",
         fontSize:'2vh',
         fontFamily:'roboto',
         lineHeight:'30px',
         
         
         
      }}>Connecting industry needs with Innovation, Excellence, & IT .We create IT solutions that are easy to use, easy to manage, and easy to trust.</p>    
      
      <div style={{
      }}>
      </div>
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
              <div className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={img}
                  alt=""
                />
               <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>AZURE</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">



                <img
                  className="img_service_detail"
                  style={{}}
                  src={aws}
                  alt=""
                />
                 <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>AWS</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
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
              <div className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={dynamic}
                  alt=""
                />
                 <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Dynamics</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={infor}
                  alt=""
                />
                 <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Infor</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={aws}
                  alt=""
                />
                 <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>SAP</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={oracle2}
                  alt=""
                />
                    <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Oracle</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
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
              <div className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={migration}
                  alt=""
                />
                    <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Migration From Legacy System</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={cloud}
                  alt=""
                />
                    <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Conversion to cloud</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
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
              <div className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={integration}
                  alt=""
                />
                    <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Integration-Api</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
              <div style={{}} className="CloudServices_div2_1">
                <img
                  className="img_service_detail"
                  style={{}}
                  src={img}
                  alt=""
                />
                    <div className="search_div">
                 <h1 className="h1_search_div" style={{
                    
                 }}>Plug-In Development</h1>

                 <div className="search_upper_div">

                <img className="search_upper_img" src={search_upper} alt="" />
                <img className="search_icon" src={search} alt="" />
                 </div>

               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </>
  );
}
export default Services_detail;
