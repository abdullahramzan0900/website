import React from 'react'
import Home from './Home/Home'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Logo from "./image/Logo.svg"
import menubar from './image/menu-bar.png'
import "@fontsource/roboto"

function Nav()
{  const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
      <>
<nav className="navigation">
  <img style={{
 marginLeft:'30px'
  }} className='logo_img' src={Logo} alt="loading"/>
  
        <div onClick={()=>{
                 setIsNavExpanded(!isNavExpanded)
        }}  className="menunav">
          <img  style={{
            width:'20px'
          }} src={menubar} alt="" />
        </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"

        }
      >
        <ul>
          <li>
            <a  style={{
             color:'#229958'
            }} href="/">Home</a>
          </li>
       
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Blogs">Blog</a>
          </li>
          <li>
            <a href="/CaseStudies">Case Studies</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
        
          </li>
        </ul>
      </div>
    </nav>

      </>
        
    )
}
export default Nav