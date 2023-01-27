
import React from 'react'
import { useParams } from 'react-router-dom';
import Contact from '../Contact/Contact';
import  about from '../image/about.png';
import digitalTransform from '../image/digitaltransform_img.jpeg'
import erp from '../image/erp_casestudies_detail.webp'
import SAP from '../image/SAP_Casedstudies.jpeg'
import Api from  '../image/Api_casestudies_detail.png'
import dynamic from '../image/dynamic_case_detail.png'
import oracle from '../image/oracle_case_detail.jpeg'
import application from '../image/application_casestudies_detail.webp'



let x=0;

function CaseStudiesDetail()
{    
    const param=useParams();
    console.log(param.id,"param");
    const array1=[
        { id:1,
      
         h1:' Digital transformation       ',
         p2:'One of our clients was struggling with the limitations of a legacy system that truly relied on transactional services. Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes. As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.   We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.    It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular. ',
          img:digitalTransform
        },
        { id:2,
      
            h1:'ERP  Restaurant',
          p2:'With the help of Vyadoms ERP, SMEs can keep track of all their company transactions in a single system. Additionally, it can help SMEs stay competitive by enabling them to make fast, fact-based decisions that are well-informed. To give strength, transparency, and control to your expanding firm, it acts as the backbone of a company.     An established restaurant was looking for a place that could handle its company management issues in a systematic manner. Soon they captured us and relied on us with assurance. We successfully handled their issue with the aid of our ERP system and by applying our knowledge.  The following are some of the ways that Vyadoms ERP benefited the client:   Integrated the process needed to run the restaurant that will help them to manage their business more efficiently and improve profitability.           To streamline operations in order to increase productivity and relieve labor pressure.       Automate restaurant operations to save time and money.    Data-sharing through the industry, to avoid blind spots caused by data silos. ',
          img:erp
     
        },
          
        { id:3,     
            h1:'Customized reporting with SAP',
           p2:'A well-known company approached us for the integration of SAP into their system. However, initially, we developed the system for the management of attendance and other HR operations but later on, they wanted to implement the SAP into their organization. Therefore we took a deep understanding of the SAP developmental methodology first. We also interacted with their consultant to better understand and learn how we can improve the user experience. Other than this, we designed a system that was directly implementing the record into the database the company opted for the SAP S4HANA and we provided the customized reporting to the client.   ',
           img:SAP
   
        },
        { id:4,
      
            h1:'API Integration ',
            p2:'It’s always challenging and interesting at the same time to solve issues that are not easy chores. We had a client of an OCR project in which we had to parse the invoices (the pictures and the pdf) in order to identify the items. The total amount, tax, and information about the vendor.  This process involved a lot of challenges likewise different formats, currencies, languages, etc. Therefore, to solve this problem efficiently and effectively we integrated nanonets API. That provided a service of OCR In which we can deliver an image or pdf file in an API that returns the parsed data of the invoice. And we integrated that into our NODEJS backend.   ',
             img:Api
         
        },
       
        { id:5,
      
            h1:'Dynamics ',
            p2:'One of our clients was using Dynamics 365 for their operational processes, due to enhancement in the company’s operational work and limitations of Nav 360. Apart from that, it was a costly solution if they opt for Dynamics 365. Initially, we had issues regarding the data as there was no data uniformity and everything was all over the place.  We have implemented our integration architecture to expand and meet the company’s current organizational needs.  We have implemented a cost-effective and timely solution to resolve their organizational need.   ',
            img:dynamic

   
        },
        { id:6,
      
            h1:'Oracle Deployment',
           p2:'We always admire working with our clients by resolving their concerns with our expertise. A fertilizer sector company come up to us for the integration of the already deployed Oracle software with the customized ERP that we were developing for the company that aimed to provide customized data to the client with the ease of a single click we implemented a customized design, later on, we have also integrated the Oracle for the display of the data. ',
           img:oracle
              
        },
        { id:7,
      
            h1:'Application Development            ',
          p2:'A company came to us on a healthy recommendation for the integration of the reporting of their ongoing software with SAP S4HANA. The company was mostly dealing with the cement sector and they wanted to customize the report for their cost estimation. As it was way more costly if they opted for the reporting of the SAP for which we developed an application that was creating the reports on the basis of the data that was coming as a result of our integration with the SAP. ',
          img:application
            
        },
        { id:8,
      
            h1:'Odoo SME                ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
           
        },
        { id:9,
      
            h1:'Dynamics            ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
           
        },
      ]
    
    return(
      
      
<div className='main_CaseStudies_detail'>
<div  className='detail_case-st-background'>
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        fontSize:'70px',
        fontFamily:'roboto'
        
        
      }} >Case Studies </h1>
      <p className='p1' style={{
         color:'#72818b',
         marginTop:"40px",
         fontSize:'2vh',
         fontFamily:'roboto',
         lineHeight:'30px'
      }}>Connecting industry needs with Innovation, Excellence, & IT .We create IT solutions that are easy to use, easy to manage, and easy to trust.</p>    
      
      <div style={{
      }}>
      </div>
      </div>

    {
        array1 && array1?.map((item)=>{
            console.log(typeof param.id)
         if(item.id==param.id)
         { <h1>aaa</h1>
             return(
                 <div className='Case_Studies_detail'>
           
<div className='p_div'>
            <h1 style={{
                alignSelf:'center !important',
                fontSize:'30px'
            }}>{item.h1}</h1>
             <hr className="Case-Studies_detail_line" style={{
    }}></hr>
    
         
                <p style={{
                     marginTop:'20px',
              alignSelf:'center',
       
         
            }}>{item.p1}</p>
                  <p style={{
                     marginTop:'20px',
              alignSelf:'center',
              lineHeight:'20px',
              textAlign:'center'
          
       
            }}>{item.p2}</p>
            </div>

            <img style={{
                alignSelf:'center'
            }} className='img_casestudies_detail' src={item.img}alt="" />

            </div>
            
            )
         }
         
         
         
        })
    }

  <Contact/>
   
    </div>

      

        
      
    )
}
export default CaseStudiesDetail;