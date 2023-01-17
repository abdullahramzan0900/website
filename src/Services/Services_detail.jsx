import  React from 'react'
import img from '../image/Services_detail_img.png'

function Services_detail()
{
    return(
        <>

<div className='Services_detail'>


    <div className='CloudServices'>



<div  className='CloudServices_div2'>

<div className='CloudServices_div2_1'>
<h1 className='h1_servcies_detail'>Cloud Services</h1>
<hr className='line_Services-detail' style={{
    
}}></hr>

<p className='p_servcies_detail'>Vyadoms cloud consulting services can direct you through best practices, so you can get the most out of the cloud!</p>

</div>



    
<div className='CloudServices_div2_1'>

<img className='img_service_detail' style={{
   
}} src={img} alt=""/>
</div>
<div style={{

}}  className='CloudServices_div2_1'>


<img className='img_service_detail'style={{
    
}} src={img} alt="" />
</div>


</div>



</div>
<div className='ERPIntegration'>



<div  className='CloudServices_div2'>

<div className='CloudServices_div2_1'>
<h1 className='h1_servcies_detail'>ERP Integration</h1>
<hr className='line_Services-detail' style={{
    
}}></hr>

<p className='p_servcies_detail'>

The simplest way to define ERP (Enterprise resource planning) is as a comprehensive business system that will meet the needs of the company’s management information.
 All firms benefit from having effective ERP and accounting systems, 
but utilizing these financial tools to their full potential can have a significant impact. 
You may count on us to provide you with effective financial systems as a customer. 
With our professional knowledge and adaptable tools in ERP, HR, payroll, and reporting, 
we help you. Whether you have a straightforward operation, more intricate manufacturing and logistics,
 or difficult project management, we assist you in finding the optimal digital solution. We operate with a variety of ERP systems, 
 including IFS Applications, Microsoft Dynamics, Infor, SAP, Oracle, and Odoo to mention a few due to our strong ERP vendor agnosticism.
  Our highly skilled staff combines specialized development and supplemental solutions with user-centered design to deliver the desired outcome for our clients.
 We work with customers outside of business systems and use the newest technology to enhance business procedures, creating opportunities for automation that will 
 foster innovation at work.

</p>

</div>



    
<div style={{
    height:'400px'
}} className='CloudServices_div2_1'>

<img className='img_service_detail' style={{
   
}} src={img} alt=""/>
</div>
<div style={{
   height:'400px'
}}  className='CloudServices_div2_1'>


<img  className='img_service_detail'style={{
    height:'253px'
}} src={img} alt="" />
</div>



</div>



</div>


</div>

        </>
    )
}
export default Services_detail