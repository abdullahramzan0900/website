import  React from 'react'
import './Home.css'
import Nav from '../Nav'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner from "../image/banner.svg"
import Gbutton from '../image/Gbutton.svg'
import line4 from '../image/Line 4.png'
import line5 from '../image/Line 5.png'
import line6 from '../image/Line 6.png'
import line7 from '../image/Line 7.png'
import menubar from '../image/menu-bar.png'
import chaticon from '../image/chat-icon.svg'

function Home()
{     
    return(
        <>        
       <div className='banner '>
        <div  className='img'>
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        
        
      }} >Delivering <span style={{
      color:'#229958'
      }}>IT Solutions</span> That </h1>
      <h1 className='height2' style={{
          
      }}> enable you To<span style={{
        color:'#229958',
      
      }}>Work Smarter</span> </h1>
      <p className='p1' style={{
         color:'#72818b',
         marginTop:"40px"
      }}>Connecting industry needs innovations,Excellence,& IT solution that are easy to use,easy to manage</p>
      <p className='p2' style={{
          color:'#72818b',
         
      }}>and easy to trust</p>
      <div className='btns'>
        <button className='btn_contact'>Contact us</button>
         <button className='btn_learn'>Learn more</button>         
      </div>
      <div className='line'>
   <img  src={line4} alt="" />
   <img style={{
    marginLeft:"10px"
   }} src={line5} alt="" />
   <img style={{
    marginLeft:"10px"
   }}  src={line6} alt="" />
    <img style={{
    marginLeft:"10px"
   }}  src={line7} alt="" />
    </div>
   
        </div>

    </div>
        </>
     
    )
}
export default Home