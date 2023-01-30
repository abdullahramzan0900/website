import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./CaseStudies.css";
import { Navigate, useNavigate } from "react-router-dom";

function Carousel2() {
  const navigate=useNavigate();
 
  const array1 = [
    {   id: 1,
      h1: "Digital transformation ",
      p: 'One of our clients was struggling with the limitations of a legacy system that truly relied on transactional services. Technologies used were CorePHP and MySQL database.',
      h2: "read more",
    },
    { id:2,
      h1:'ERP for Hotel ',
      p:` With the help of Vyadom's ERP, SMEs can keep track of all their company transactions in a single system. Additionally, it can help SMEs stay competitive by enabling them to make fast, fact-based decisions that are well-informed. `,
      h2:'Read More'
    },
    { id:3,
      h1:'Customized reporting with SAP  ',
      p:` A well-known company approached us for the integration of SAP into their system. However, initially, we developed the system for the management of attendance and other HR operations but later on... `,
      h2:'Read More'
    },
     {id:4,
      h1:'API Integration',
      p: `It’s always challenging and interesting at the same time to solve issues that are not easy chores. We had a client of an OCR project in which we had to parse the invoices (the pictures and the pdf) in order to identify the items. The total amount, tax, and information about the vendor. `,
      h2:'Read More'
     },
     { id:5,
       h1:'Dynamics',
       p:' One of our clients was using Dynamics 365 for their operational processes, due to enhancement in the company’s operational work and limitations of Nav 360. Apart from that, it was a costly solution if they opt for Dynamics 365. ',
       h2:'Read More'
     },
     { id:6,
       h1:'Oracle Deployment ',
       p:' We always admire working with our clients by resolving their concerns with our expertise. A fertilizer sector company come up to us for the integration of the already deployed Oracle software with the customized ERP that we were developing for the company  ',
       h2:'Read More'
     },
     {id:7,
      h1:'Application Development ',
      p:'A company came to us on a healthy recommendation for the integration of the reporting of their ongoing software with SAP S4HANA. The company was mostly dealing with the cement sector and they wanted to customize the report for their cost estimation.',
      h2:'Read More'
  
     },
     { id:8,
       h1:'Customized P ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'Read More'
     },
     { id:9,
       h1:'Oracle Deployment ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'Read More'
     }
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
                      fontSize:'12px',
                      textAlign:'center'
                  }}>{item.p}</p>
                  <h4 className="readmore_outercasestudies" onClick={()=>{
                      window.open(`/CaseStudies/${item.id}`,'_top')
                  }} style={{
                    cursor:'pointer',
                    fontSize:'15px'
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
 