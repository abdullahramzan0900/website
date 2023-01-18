import React from "react";
import { useState } from "react";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";
let x=0;
function CaseeStuide()
{ const navigate=useNavigate();
  const array1=[
    { id:1,
     h1:'ERP for Restaurant',
     p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
     h2:'readmore'
    },
    { id:2,
      h1:'Odoo SME',
      p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      h2:'readmore'
    },
    { id:3,
      h1:'Dynamics',
      p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
  
      h2:'readmore'
    },
     {id:4,
      h1:'API Integration',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      h2:'readmore'
     },
     { id:5,
       h1:'Customized reporting  with SAP ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
     },
     { id:6,
       h1:'Oracle Deployment ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
     },
     {id:7,
      h1:'API Integration',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      h2:'readmore'
     },
     { id:8,
       h1:'Customized P ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
     },
     { id:9,
       h1:'Oracle Deployment ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
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
        fontSize:'40px',
        fontFamily:'roboto'
        
      }} >Examples of <span style={{
      color:'#229958',
      fontSize:'40px',
         fontFamily:'roboto'
     }}>Client Success</span> That 
    Powered by<span style={{
        color:'#229958',
        fontSize:'36px',
         fontFamily:'roboto'
     
      
      }}> Vyadom</span> </h1>
      <p className='p1' style={{
         color:'#72818b',
         marginTop:"40px",
         fontSize:'2vh',
         fontFamily:'roboto'
      }}>Connecting industry needs with Innovation, Excellence, & IT .We create IT solutions that are easy to use, easy to manage, and easy to trust.</p>
     
     
   


   </div>

          <div className="detail_CaseStuides">
        <h1 style={{
        fontSize:'28px',
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
            
          }}>{item.h1}</h1>
             

          <p style={{
                      
              color:'white',
              fontFamily: "Roboto"
            }}>{item.p}
      
        </p>
        <div onClick={()=>{
          navigate(`/CaseStudies/${item.id}`);
        }} style={{
          color:'white',
          fontFamily: "Roboto"  ,
          cursor:'pointer'        
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