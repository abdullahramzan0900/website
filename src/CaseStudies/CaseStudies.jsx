import React, { useState } from 'react'
import './CaseStudies.css'
import path26 from '../image/Path26.png';
import path27 from '../image/Path27.png';
import line8 from '../image/Line8.png'


function  CaseStudies()
{ const array=[
  {   
   h1:'ERP for Restaurant',
   p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
   h2:'read more'
  },
  {
    h1:'Odoo SME',
    p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
    h2:'read more'
  },
  {
    h1:'Dynamics',
    p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',

    h2:'read more'
  }
] 
const array2=[
  {
   h1:'API Integration',
   p:'There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
   h2:'read more'
  },
  {
    h1:'Customized reporting  with SAP ',
    p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
    h2:'readmore'
  },
  {
    h1:'Oracle Deployment ',
    p:' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',

    h2:'read more'
  }
]


const [Array,Setarray]=useState(array);

        
    return(
        <>
       <div>
        <div style={{
        
        }}>


         <div className='case_height' style={{
           
           
        }}>

         <h1 style={{
           fontSize:'3vh',
           padding:'20px',
           fontFamily:"roboto"
          }}>Case Studies</h1>
          <hr className='services_hr' style={{
            
            
          }}  />
          </div>
    <div className='case_div'>

      

    
<div style={{
     marginTop:'10px'
}} class="Case_containers">
  {  Array && Array?.map((item)=>{
     return(
      <div style={{
     background:'#229958',
     textAlign:'center',
     fontFamily: "Roboto",
     padding:'20px',
     border:'none'
    }} class="box2">
      
      <h1 style={{
            fontSize:'3vh',
            color:'white',
            alignSelf:'center',
            fontFamily: "Roboto",
            
          }}>{item.h1}</h1>
             <div className='inner_box2'>

          <p style={{
            fontSize:'1.6vh',             
              color:'white',
              fontFamily: "Roboto"
            }}>{item.p}
      
        </p>
        <div style={{
          color:'white',
          fontFamily: "Roboto"
          
          
        }}>{item.h2}</div>
        </div>


      
      </div>
     )
  })
}
      {/* <div style={{
        textAlign:'center',
        background:' #626363',
        fontFamily: "Roboto",
        padding:'20px',
        border:'none'
      }} class="box2">
       
      <h1 style={{
        fontSize:'3vh',
        color:'white',
        fontFamily: "Roboto",

      }}>Odoo SME</h1>
              <div className='inner_box2'>

          <p style={{
            fontSize:'1.6vh', 
            color:'white',
            fontFamily: "Roboto"
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      
        </p>
        <div style={{
          color:'white',
          fontFamily: "Roboto",
        
          
        }}>Readmore</div>
              </div>
    
      </div>
      <div style={{
        textAlign:'center',
        background:' #626363',
        fontFamily: "Roboto",
        padding:'20px',
        border:'none'
        
      }} class="box2">
      
        
      <h1 style={{
        fontSize:'3vh',
        color:'white',
        fontFamily: "Roboto"
      }}>Dynamics</h1>
        <div className='inner_box2'>

          <p style={{
            fontSize:'1.6vh',
            color:'white',
            fontFamily: "Roboto"
          }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div style={{
          color:'white',
          fontFamily: "Roboto"
          
          
       
      }}>Readmore</div>
            </div>

    
      </div> */}
  
    
    </div>
 

    </div>
   

    <div style={{
      height:'150px',
      
      display:'flex',
      justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#444545',
    
    fontFamily: "Roboto"
    
  }}>
    <div style={{
       width:'40px',
      
       height:"40px",
       background:'rgb(34, 153, 88)',
       padding:'6px',
       opacity:'0.7',
       paddingLeft:'12px',
    }}>

    <div style={{
      width:'30px',
      
    }}>
      </div>
    <img onClick={()=>{
       Setarray(array)
    }} src={path27} alt="" />

    </div>
    <div style={{
        width:'40px',
      marginRight:'39px',
      marginLeft:'10px',
      paddingLeft:'10px',
      height:"40px",
        background:'rgb(34, 153, 88)',
        padding:'6px',
      
    }}>

    <div style={{
      width:'30px',
      
      
    }}>
    <img onClick={()=>{
      Setarray(array2)
    }} src={path26} alt=""/>

      </div>
    </div>
    </div>
  
      </div>
    
      </div>
        </>
    )
}
export default CaseStudies;