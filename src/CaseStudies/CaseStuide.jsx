import React from "react";
import { useLocation } from "react-router-dom";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";
let x=0;
function CaseeStuide()
{ const navigate=useNavigate();
  


  const array1=[
    {   id: 1,
      h1: "Digital transformation ",
      p: 'One of our clients was struggling with the limitations of a legacy system that truly relied on transactional services. Technologies used were CorePHP and MySQL database.',
      h2: "Read More",
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
  ]
  // const [background,Setbackground]=useState('img');
  // const array=[
  
  //   'img1','img2','img4','img3'
  //   ]
  //   setTimeout(() => {
  //      Setbackground(array[x]);
  //      if(x==3)
  //      {
  //       x=0;
    
  //      }
  //     x++;
  //   }, 8000);
    return(
        <>
        <div className="main_detail_casestudies">
     
        <div  className="background_casestudies">
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        fontSize:'60px',
        fontFamily:'roboto'
        
      }} >Examples of <span style={{
      color:'#229958',
      fontSize:'60px',
         fontFamily:'roboto'
     }}>Client Success</span> That 
    Powered by<span style={{
        color:'#229958',
        fontSize:'60px',
         fontFamily:'roboto'
  
     
      
      }}> Vyadom</span> </h1>
      <p className='p1' style={{
         color:'#72818b',
         marginTop:"40px",
         fontSize:'2vh',
         fontFamily:'roboto',
         lineHeight:'25px'
      }}>Connecting industry needs with Innovation, Excellence, & IT .We create IT solutions that are easy to use, easy to manage, and easy to trust.</p>
     
     
   


   </div>

          <div className="detail_CaseStuides">
        <h1 style={{
        fontSize:'40px',
        color:'white'
        }}>Case-Studies</h1>
        <hr className="Case-Studies_detail_line" style={{
      
      

        }}></hr>

         <div className="cards3">    
  {   
  
   array1 && array1?.map((item=>{
       return(
      <>

        <div key={item.id} class="card3">



        <h1 style={{         
            color:'white',
            alignSelf:'center',
            fontFamily: "Roboto",
            fontSize:'28px'
            
          }}>{item.h1}</h1>
             

          <p style={{                    
              color:'#E6E6E6',
              fontFamily: "Roboto",
              lineHeight:'20px',
              textAlign:'center',
              fontSize:'13px '
            }}>{item.p}
      
        </p>
        <div  className="casestudies_readmore" onClick={()=>{
          navigate(`/CaseStudies/${item.id}`);
        }} style={{       
          fontFamily: "Roboto"  ,
          cursor:'pointer'  ,
          fontSize:'14px'      
        }}>{item.h2}</div>
          
        </div>  
      </>
   )
   }))


   
   
  }
    </div>
    </div>


    <Contact/>
  </div>
  
  </>
  )
    }
    export default CaseeStuide;