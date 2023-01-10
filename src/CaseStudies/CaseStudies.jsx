import React from 'react'
import './CaseStudies.css'
import path26 from '../image/Path26.png';
import path27 from '../image/Path27.png';
import line8 from '../image/Line8.png'


function  CaseStudies()
{
    return(
        <>
        {/* <div className='CaseStudies_main'>
      <h1>Case-Stuides</h1>
      <div class="cards3">
      <div class="card3">
        <h1 style={{
            fontSize:'4vh'
        }}>ERP for Restaurant</h1>
        <p>there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
        there are many passengers avalible
      
        </p>
        <button>Read more </button>


      </div>
<div class="card3">TWO</div>
<div class="card3">THREE</div>

      </div>
      

        </div> */}
         <div className='case_height' style={{
          
        
        }}>

         <h1 style={{
           fontSize:'5vh'
          }}>Case Studies</h1>
          <img style={{
            marginTop:'20px'
          }} src={line8} alt="" />
          </div>
    <div className='case_div'>

    
<div style={{
     marginTop:'10px'
}} class="Case_containers">
      <div style={{
     background:'#229958',
     textAlign:'center'
      }} class="box2">
      
      <h1 style={{
            fontSize:'3vh',
            color:'white',
            alignSelf:'center'
        }}>ERP for Restaurant</h1>
             <div className='inner_box2'>

          <p style={{
              fontSize:'1.6vh',
              
              color:'white'
            }}>There are many variations of passages of Lorem Ipsum available, but the majority
             have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. 
      
        </p>
        <div style={{
              color:'white'
            
        }}>Readmore</div>
        </div>


      
      </div>
      <div style={{
             textAlign:'center',
             background:' #626363',
      }} class="box2">
       
      <h1 style={{
            fontSize:'3vh',
            color:'white'
        }}>Odoo SME</h1>
              <div className='inner_box2'>

          <p style={{
              fontSize:'1.6vh',
        color:'white'
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      
        </p>
        <div style={{
          color:'white',
    
        }}>Readmore</div>
              </div>
    
      </div>
      <div style={{
             textAlign:'center',
             background:' #626363',
            
      }} class="box2">
      
        
      <h1 style={{
            fontSize:'3vh',
            color:'white'
        }}>Dynamics</h1>
        <div className='inner_box2'>

          <p style={{
              fontSize:'1.6vh',
              color:'white'
            }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div style={{
       color:'white'
      

        
        }}>Readmore</div>
            </div>

    
      </div>
  
    
    </div>
 

    </div>
    <div style={{
      height:'150px',
     
      display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#444545'
    
    }}>
    <div style={{
      width:'30px',
    
    }}>
    <img src={path27} alt="" />

    </div>
    <div style={{
      width:'30px',
      

    }}>
    <img src={path26} alt="" />

    </div>
    </div>
  
    
        </>
    )
}
export default CaseStudies;