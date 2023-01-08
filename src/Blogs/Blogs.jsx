import React from 'react'
import './Blogs.css'
import Blog1 from '../image/Blog1.png';
import Blog2 from '../image/Blog2.png';
import Blog3 from '../image/Blog3.png';
import Blog4 from '../image/Blog4.png';
function Blogs()
{
    return(
        <>
        <div className='blog_height' style={{
          
        
        }}>

         <h1 style={{
           fontSize:'8vh'
          }}>BLOGS</h1>
          </div>
    <div className='Main_div'>

    
<div class="containers">
      <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={Blog1} />
        <h3 className='h3'>Invesment</h3>
      
      </div>
      <div class="box">
        <img  style={{
          height:'34vh'
        }}     className='img_blog' src={Blog2} />
        <h3>Work Palce</h3>
    
      </div>
      <div class="box">
        <img style={{
          height:'34vh'
        }}  className='img_blog' src={Blog3} />
        <h3>Creative Progress</h3>
    
      </div>
    <div class="box">
        <img style={{
          height:'34vh'
        }} className='img_blog' src={Blog4} />
        <h3>Creative Progress</h3>
     
      </div>
  
    
    </div>
  
  
    

    </div>
    <div style={{
      width:'98.78vw',
      height:'150px',
      backgroundColor:'#229958',
      display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
    }}>

      <button>ababab</button>
    </div>
        
        </>
    )
}
export default Blogs
