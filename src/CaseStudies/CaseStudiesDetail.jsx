import { fontSize } from '@mui/system';
import { useState } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom';
import Contact from '../Contact/Contact';
import  about from '../image/about.png';
import background_img_1 from '../image/banner.svg'
import background_img_2 from '../image/background_img3.svg'
import background_img_3 from '../image/bannerr.svg'
import background_img_4 from '../image/background_img4.svg'


let x=0;

function CaseStudiesDetail()
{    
    const param=useParams();
    console.log(param.id,"param");
    const array1=[
        { id:1,
      
         h1:' Digital transformation       ',
         p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
         p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
         p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'

        },
        { id:2,
      
            h1:'ERP  Restaurant',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
   
            
     
        },
          
        { id:3,
      
            h1:'Customized reporting with SAP',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
   
        },
        { id:4,
      
            h1:'API Integration ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
   
         
        },
       
        { id:5,
      
            h1:'Dynamics ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
   
        },
        { id:6,
      
            h1:'Oracle Deployment            ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
              
        },
        { id:7,
      
            h1:'Application Development            ',
            p:'One of our clients was struggling with the limitationsof a legacy system that truly relied on transactional services.Technologies used were CorePHP and MySQL database, since it contained millions of records so the latency of retrieval/update of information around was 5 to 6 minutes.As well as there were several other reasons for that, like tables with hundreds of columns, unoptimized code, and poor relations and joins.  ',
            p1:'We advised them to utilize Angular as their front-end framework, PostgreSQL as their database, and NodeJS as their backend. They agreed because it was so convincing, and we then had to move the legacy system to the one with the newest technologies.',
            p2:'It was really difficult for us at first to fully comprehend the system and all of the requirements. The next problem was optimizing the database. Next, we converted the CorePHP functionality into NodeJS (ExpressJs) and entirely redrew the user interface in Angular.'
            
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
        fontSize:'40px',
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
      
              
              textAlign:'justify'
            }}>{item.p}</p>
                <p style={{
                     marginTop:'20px',
              alignSelf:'center',
       
         
            }}>{item.p1}</p>
                  <p style={{
                     marginTop:'20px',
              alignSelf:'center',
          
       
            }}>{item.p2}</p>
            </div>

            <img style={{
                alignSelf:'center'
            }} className='img_casestudies_detail' src={about}alt="" />

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