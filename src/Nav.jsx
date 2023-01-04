import React from 'react'
import Home from './Home/Home'
import {Link} from 'react-router-dom'


function Nav()
{
    return(
      
        <div className='Nav'>
            <div>
          <img src="./Logo.svg" alt="loading..."/>
          aaa
            </div>
    
            <div className='Links'>    

        <Link className='link' to={'/'}>Home</Link>
            
        
        <Link className='link'   to={'/'}>ABOUT</Link>
    
        <Link className='link' to={'/'}>SERVICES</Link>

        <Link className='link' to={'/'}>BLOG</Link>
        <Link className='link' to={'/'}>Case Studies</Link>
        <Link className='link' to={'/'}>Contact</Link> 
                
            </div>
        </div>
       
    )
}
export default Nav