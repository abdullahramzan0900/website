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
import About from '../ABOUT/About'
import menubar from '../image/menu-bar.png'
import chaticon from '../image/chat-icon.svg'
import  about from '../image/about.png'
import  about2 from '../image/about2.png'
import Services from '../Services/Services'
import Blogs from '../Blogs/Blogs'

import line8 from '../image/Line8.png'
import '../ABOUT/About.css'
import CaseStudies from '../CaseStudies/CaseStudies'
import Contact from '../Contact/Contact'
import { imageListClasses } from '@mui/material'





function Home()
{    const [background,Setbackground]=useState('img');
  
    return(
        <>    
       <div className='banner '>
        <div  className={background}>
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        fontSize:'40px',
        fontFamily:'backslash'
        
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
      <div>
    

 <button onClick={()=>{
Setbackground('img');
 }} style={{
    background:'rgb(34, 153, 88)',
    marginTop:'50px',
    width:'45px',
    height:'10px',
    borderRadius:'22px',
    border:'none'
 }}></button>
 <button onClick={()=>{
      Setbackground('img2');
 }}  style={{
    background:'rgb(34, 153, 88)',
    width:'20px',
    height:'10px',
    borderRadius:'22px',
    border:'none'
 }}></button>
 <button  style={{
    background:'rgb(34, 153, 88)',
    height:'10px',
    width:'20px',
    borderRadius:'22px',
    border:'none'
 }}></button>
 <button  style={{
    background:'rgb(34, 153, 88)',
    height:'10px',
   
    width:'20px',
    borderRadius:'22px',
    border:'none'
 }}></button>
      </div>

   </div>
   <About/>
   <Services/>
   <Blogs/>
   <CaseStudies/>
   <Contact/>
    </div>
        </>
     
    )
}
export default Home