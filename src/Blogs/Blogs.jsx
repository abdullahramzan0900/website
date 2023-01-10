import React from 'react'
import './Blogs.css'
import Blog1 from '../image/Blog1.png';
import Blog2 from '../image/Blog2.png';
import Blog3 from '../image/Blog3.png';
import Blog4 from '../image/Blog4.png';
import path26 from '../image/Path26.png';
import path27 from '../image/Path27.png';
import line8 from '../image/Line8.png'

function Blogs()
{
    return(
        <>
        <div className='blog_height' style={{  
        
        }}>

         <h1 style={{
           fontSize:'6vh',
           
         
          }}>Blogs</h1>
<img style={{
  width:'150px '
}} src={line8} alt="" />
          </div>
    <div className='Main_div'>

    
<div class="containers">
      <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={Blog1} />
        <h3 className='h3'>Cloud Computing & its
Benefits</h3>
      
      </div>
      <div class="box">
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
     
      </div>
  
    
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
      margin:'20PX'
    }}>
    <img src={path27} alt="" />

    </div>
    <div style={{
      width:'50px',
   backgroundColor:'#229958',
    
    }}>
    <img style={{
    
    }} src={path26} alt="" />

    </div>
    </div>

      <div>





      


    </div>
        
        </>
    )
}
export default Blogs
