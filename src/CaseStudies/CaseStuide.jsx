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
     h2:'read more'
    },
    { id:1,
      h1:'Odoo SME',
      p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      h2:'read more'
    },
    { id:1,
      h1:'Dynamics',
      p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
  
      h2:'read more'
    },
     {id:2,
      h1:'API Integration',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      h2:'read more'
     },
     { id:2,
       h1:'Customized reporting  with SAP ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
     },
     { id:2,
       h1:'Oracle Deployment ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'read more'
     },
     {id:3,
      h1:'API Integration',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      h2:'read more'
     },
     { id:3,
       h1:'Customized P ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'readmore'
     },
     { id:3,
       h1:'Oracle Deployment ',
       p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
       h2:'read more'
     }
  ]
  const [background,Setbackground]=useState('img');
  const array=[
  
    'img1','img2','img4','img3'
    ]
    setTimeout(() => {
       Setbackground(array[x]);
       if(x==3)
       {
        x=0;
    
       }
      x++;
    }, 8000);
    return(
        <>
        <div className="main_detail_casestudies">
     
        <div  className={background}>
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        fontSize:'40px',
        fontFamily:'roboto'
        
      }} >Delivering <span style={{
      color:'#229958',
      fontSize:'40px',
         fontFamily:'roboto'
     }}>IT Solutions</span> That 
    enable you To<span style={{
        color:'#229958',
        fontSize:'40px',
         fontFamily:'roboto'
     
      
      }}>Work Smarter</span> </h1>
      <p className='p1' style={{
         color:'#72818b',
         marginTop:"40px",
         fontSize:'2vh',
         fontFamily:'roboto'
      }}>Connecting industry needs with Innovation, Excellence, & IT .We create IT solutions that are easy to use, easy to manage, and easy to trust.</p>
     
      <div className='btns'>
        <button className='btn_contact'>Contact us</button>
         <button className='btn_learn'>Learn more</button>  

      </div>
      <div style={{
   
      }}>
 <button onClick={()=>{
Setbackground('img');
 }} style={{
    background:'rgb(34, 153, 88)',

    marginTop:'50px',
    width:'45px',
    height:'10px',
    borderRadius:'22px',
    border:'none',
 }}></button>
 <button onClick={()=>{
      Setbackground('img2');
 }}  style={{
    background:'rgb(34, 153, 88)',
    width:'20px',
    height:'10px',
    borderRadius:'22px',
    border:'none',
    marginLeft:'10px',
 }}></button>
 <button onClick={()=>{
   Setbackground('img3');
 }}  style={{
    background:'rgb(34, 153, 88)',
    height:'10px',
    width:'20px',
    borderRadius:'22px',
    border:'none',
    marginLeft:'10px',
 }}></button>
 <button onClick={()=>{
      Setbackground('img4');
 }}  style={{
    background:'rgb(34, 153, 88)',
    height:'10px',  
    width:'20px',
    borderRadius:'22px',
    border:'none',
    marginLeft:'10px',
 }}></button>
      </div>

   </div>

          <div className="detail_CaseStuides">
        <h1 style={{
        fontSize:'28px'
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
          fontFamily: "Roboto"          
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