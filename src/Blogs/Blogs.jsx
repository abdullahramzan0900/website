import React from 'react'
import './Blogs.css'
import Blog1 from '../image/Blog1.png';
import Blog2 from '../image/Blog2.png';
import Blog3 from '../image/Blog3.png';
import Blog4 from '../image/Blog4.png';
import path26 from '../image/Path26.png';
import path27 from '../image/Path27.png';
import line8 from '../image/Line8.png'
import { useState } from 'react';

function Blogs()
{ const[image1,setimage1]=useState(Blog1);
  const array1=[
    {
      img:Blog1,
      h1:'Cloud Computing & its Benefits',
    },
    {
      img:Blog2,
      h1:'Impact of ERP in SME',
    
    },
    {
      img:Blog3,
      h1:'Digital Transformation & IoT',
    },
    {
   h1:'Technology in 2023',
   img:Blog4,

    }
  ]


    return(
        <>

        <div>

         <div className='blog_height' style={{  
          padding:'24px',
          fontFamily:'roboto'
        }}>

         <h1 style={{
           fontSize:'4vh',
           
           
          }}>Blogs</h1>
<img style={{
  width:'120px',
  padding:'15px'
}} src={line8} alt="" />
          </div>
    <div className='Main_div'>  
<div class="containers">
  {  array1 && array1?.map((item)=>{
    return(
      <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={item.img} />
        <h3 className='h3'>{item.h1}</h3>

      </div>
     

    )
  })
  
  }
      
    
      {/* <div class="box">
        <img  style={{
          height:'34vh',
        }}     className='img_blog' src={Blog2} />
        <h3 className='h3'>Impact of ERP in SME</h3>
    
      </div>
      <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={Blog3} />
        <h3 className='h3'>Digital Transformation
& IoT</h3>
    
      </div>
    <div class="box">
        <img style={{
          height:'34vh'
        }} className='img_blog' src={Blog4} />
        <h3 className='h3'>Technology in 2023</h3>
     
      </div> */}
  
    
    </div>
  
  
    

    </div>
    <div style={{
      height:'150px',
      backgroundColor:'#229958',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      
    }}>
    <div style={{
      width:'30px',
      backgroundColor:'#229958',
      margin:'20px'
    }}>
      <div style={{
        width:'40px',
      
        height:"40px",
        background:'#444545',
        padding:'6px',
        opacity:'0.7'
     
      
      }}>

    <img src={path27} alt="" />
      </div>

    </div>
  
    <div style={{
      width:'80px',
      backgroundColor:'#229958',
      
    }}>
      <div style={{
           width:'40px',
      
           height:"40px",
           background:'#444545',
           padding:'8px',
           paddingLeft:'10px'
      }}>

    <img style={{
      
    }} src={path26} alt="" />

    </div>
   
    </div>

    </div>
      <div>





      

    </div>

    </div>
        
        </>
    )
}
export default Blogs
