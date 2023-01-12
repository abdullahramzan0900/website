import React from 'react'
import './Blogs.css'
import Blog1 from '../image/Blog1.png';
import Blog2 from '../image/Blog2.png';
import Blog3 from '../image/Blog3.png';
import Blog4 from '../image/Blog4.png';
import path26 from '../image/Path26.png';
import path27 from '../image/Path27.png';
import line8 from '../image/Line8.png';
import Test from './Test';

import{ Carousel} from "react-elastic-carousel";

 
import { useState } from 'react';

let x=1;
function Blogs()
{    const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 900, itemsToShow: 3 },
];
  const array1=[
    { id:1,
      img:Blog1,
      h1:'Cloud Computing & its Benefits',
    },
    {  id:1,
      img:Blog2,
      h1:'Impact of ERP in SME',
    
    },
    {  id:1,
      img:Blog3,
      h1:'Digital Transformation & IoT',
    },
    { id:1,
      h1:'Technology in 2023',
   img:Blog4,

  },
    { id:2,
      h1:'Technology in 2023',
      img:Blog4,
   
     },
     {  id:2,
      img:Blog3,
      h1:'Digital Transformation & IoT',
    },
    { id:2,
      img:Blog1,
      h1:'Cloud Computing & its Benefits',
    },
    {  id:2,
      img:Blog2,
      h1:'Impact of ERP in SME',
    },
    {
      id:3,
      img:Blog3,
      h1:'Digital Transformation & IoT',
      
    },
    {  id:3,
      img:Blog2,
      h1:'Impact of ERP in SME',
    },
    {  id:3,
      img:Blog1,
      h1:'Impact of ERP in SME',
    },
    {  id:3,
      img:Blog4,
      h1:'Impact of ERP in SME',
    },
    
  ]
  
  const [Array,Setarray]=useState(array1);
  const [id,Setid]=useState(x);

  return(
        <>
        <div >
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
<Test/>
    
  {/* {  Array && Array?.map((item)=>{
    if(item.id===id)
    {

      return(
        <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={item.img} />
        <h3 className='h3'>{item.h1}</h3>
      </div>    
     )
    }
  })
  
  } */}
      {/* <div class="carousel-wrapper">
            <Carousel>
                <div>
                    <img src={Blog1} />
                </div>
                <div>
                    <img src={Blog2} />
                </div>
                <div>
                    <img src={Blog3} />
                </div>
            </Carousel>
        </div> */}

  
      
    
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
    {/* <div style={{
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

    <img onClick={()=>{
      if(x>1)
      {
        x--;
        Setid(x);

      }
    }} src={path27} alt="" />
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

    <img onClick={()=>{
      if(x<3)
      {
        x++;
        Setid(x);
       

      }
    }} style={{
      
    }} src={path26} alt="" />

    </div>
   
    </div>

    </div> */}
      <div>





      

    </div>

    </div>
        
        </>
    )
}
export default Blogs
