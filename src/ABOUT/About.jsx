import React from "react";
import  about from '../image/about.png'
import  about2 from '../image/about2.png'
import './About.css'
import line8 from '../image/Line8.png'

function About()
{
    return(
        <>
<div className="contain">

<div className="about">


<div className="about_img">
<img className="about_img1" src={about}alt="" />
<img  className="about_img2"  src={about2} alt="" />
</div>

<div className="aboutus">
<div style={{
 

    
}}>
   
<h1 className="H_aboutus" style={{
  
}}>About Us</h1>
<img style={{
  
}} src={line8} alt="" />
<p className="p_aboutus" style={{
 
}}>

The Vyadom Group is a collection of multifaceted businesses created with 
the express purpose of serving the general public. We provide information 
technology services with the aim of delivering business solutions to 
customers worldwide. With a strong workforce of multi-talented employees, 
the company has achieved remarkable milestones. Our range of services 
includes Cloud services, ERP Integrations, Salesforce, and Digital 
Transformations has made us an established and reputed brand name 
among local and foreign clients. We aim to meet the expectations of our 
clients and explain the best strategies that take their projects to a higher level.

</p>
    </div>
    <div className="about_btn_div">

<button className="about_btn">Learn more </button>
    </div>
    </div>
    </div>





</div>
    
      
        </>
    )
}
export default About;