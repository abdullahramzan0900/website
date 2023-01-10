import React from 'react';
import Service1 from '../image/Services1.png'
import Service2 from '../image/Services2.png'
import Service3 from '../image/Services3.png'
import Servcies4 from '../image/Servcies4.png';
import background from '../image/background.png'
import line8 from '../image/Line8.png'
import search from '../image/search.png'
import './Services.css'

function Services()
{  
    return(
   
   <>
   <div className='main'>

   <div class="service_main">
    <div className='Services'>
      <div style={{
     
   
        
      }}>

<h1 style={{
  fontSize:'3vh',
  color:'white'
  
}}>Our services</h1>
<img style={{

}} src={line8} alt="" />
</div>


<p style={{
  fontSize:'2vh',
  textAlign:'center',
  color:'white'
  
}}>We provide quality services to out client that support bussniess in developing
and implementing ovations solution for performance ,growth and relevance</p>
<button style={{
  width:'140px',
  height:'60px',
  backgroundColor:'white',
  color:'#229958',
  borderRadius:'10px',
  border:'none',
  marginTop:'40px'
}}>Learn more</button>


    </div>
    <div class="image-grid">
   <div>
      <img class="grid-image" src={Service1}/>
     <button style={{
      background:'black',
      color:'white',
      
   borderTopLeftRadius:'24px',
   borderTopRightRadius:'22px'

     }} className='detail'>Cloud services</button>
   </div>      
<div>

      <img  class="grid-image" src={Service2}/>
      <button  style={{
      background:'white',
      color:'black',
      
      borderTopLeftRadius:'22px',
      borderTopRightRadius:'22px'
     }}  className='detail'>ERP Integration</button>
</div>
<div>

      <img class="grid-image" src={Service3}/>
      <button  style={{
      background:'white',
      color:'black',
      borderTopLeftRadius:'22px',
      borderTopRightRadius:'22px',
    
     }}  className='detail'>DigitalTransformation</button>
</div>
<div>

      <img class="grid-image" src={Servcies4}/>
      <button  style={{
      background:'white',
      color:'black',
  borderTopLeftRadius:'22px',
  borderTopRightRadius:'22px'
     }} className='detail'>Sales force</button>
</div>

  
    </div>
   </div>
  {/* <div className='cloud'>
  <div  style={{
         width:'40vw',  
         height:'20vh',
         backgroundColor:'burlywood',
         display:'flex',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center'
    }} >
    <h1 style={{
        fontSize:'2vw'
    }} >Cloudtek Services</h1>
    <img  src={line8} />
  
    <p style={{
        fontSize:'1vw'
    }}>Vyadoms cloud consulting service can direct you through bbest practices 
        so you can get most out of the cloud
    </p>

    </div>
    <div style={{
         width:'30vw',  
         height:'40vh',
         backgroundColor:'burlywood'
    }}>

    <p style={{
        fontSize:'1wv',
  
      
     
    }}>
    </p>

    </div>
    <div style={{
         width:'20vw',  
         height:'40vh',
         backgroundColor:'brown',
        alignItems:'center',
        fontSize:'4vw',
        display:'inline-block'
  
    }}>
      aabbssabassasa
      aabbababababba
      ababababababab
      ababbababababa
      ababbababababa


    </div>
    <div>

    <p></p>
    </div>
  </div> */}
  <div class="grid-container">
  <div style={{
  backgroundColor:'#626363'
  }} class="item item1">
  <h1 style={{
    fontSize:'4vh',
    color:'white'
     

}}>Cloud Services</h1>
  <img style={{
    background:'red'
  }}  src={line8} />
  
  <p style={{
      fontSize:'1.7vh',
      textAlign:'justify',
    
 color:'white'
  }}>Vyadom’s cloud consulting services can direct you through best practices, so you can get the most out of the cloud!
  </p>
  </div>
  <div style={{
       fontSize:'1.6vh', 
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       textAlign:'justify',
       color:'white',
       
    
  }} class="item item2">
    <h1 style={{
      height:'4vh',
      color:'white'
    }}>Azure</h1>
    <p>

As more businesses migrate to the cloud and invest in Microsoft technologies, they are looking for certified
 specialists to help them navigate the complexity of Microsoft Azure.
  To select the proper service elements and set them properly, customers still 
    </p>



  </div>


  <div style={{
      fontSize:'1.6vh',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     textAlign:'justify',
     color:'white'
  }} class="item item3">
    <h1 style={{
      height:'4vh',
      color:'white'
    }}>AWS</h1>
 
With more than 200 featured resources, from infrastructure to machine learning,
 Amazon Web Services (AWS) is the largest cloud computing platform. These modular solutions combine
  optimum usability with speed optimization for your application through 
  features for content delivery, data storage, and more. With AWS, you
   only pay for the precise amount of assistance you need, resulting in a reduced 
   capital commitment and a faster time to value without sacrificing productivity. 
 By launching the first cloud computing service, Amazon EC2, in 2008, the leading cloud
  vendor Amazon made history. The AWS Console, which allows users to centrally manage their services,
   is accessible to free users, and the company offers more 
   features and solutions than any other supplier.

  </div>  

</div>

<div  class="grid-container2">
  <div style={{
     backgroundColor:'#626363',
     alignContent:'center'
  }} class="itm1">
  <h1 style={{
    fontSize:'4vh',
    color:'white'

}}>ERP Integration</h1>
  <img  src={line8} />
  
  <p style={{
      fontSize:'1.7vh',
      textAlign:'justify',
      color:'white'
  }}>
    The simplest way to define ERP (Enterprise resource planning) is as a comprehensive business system that will meet the needs of the company’s management information. All firms benefit from having effective ERP and accounting systems, but utilizing these financial tools to their full potential can have a significant impact. You may count on us to provide you with effective financial systems as a customer. With our professional knowledge and adaptable tools in ERP, HR, payroll, and reporting, we help you. Whether you have a straightforward operation, more intricate manufacturing and logistics, or difficult project management, we assist you in finding the optimal digital solution.

We operate with a variety of ERP systems, including IFS Applications, Microsoft Dynamics, Infor, SAP, Oracle, and Odoo to mention a few due to our strong ERP vendor agnosticism. Our highly skilled staff combines specialized development and supplemental solutions with user-centered design to deliver the desired outcome for our clients. We work with customers outside of business systems and use the newest technology to enhance business procedures, creating opportunities for automation that will foster innovation at work.
  </p>
  </div>
  <div className='background_img_div'  style={{
   
    backgroundColor:'#626363',      
     display:'flex',
     position:'relative',
    
       color:'white',
   

  }}  class="itm2">
     {/* <h1 style={{
      height:'4vh',
      color:'white'
    }}>Azure</h1> */}
<div style={{

}} className='service_background'>
 <img style={{

        width:'28vw',
        height:'40vh',
        opacity:'0.4',


        
 }} src={background} alt="" />
<div className='inner__text'>

  <h1 style={{
 
  }}>Dynamics</h1>
  <div style={{
    background:'#229958',
    marginTop:'20px',
    height:'40px',
  borderBottomRightRadius:'70px'
  }}>

  <img style={{
    width:'1.6vw'
  }} src={search} alt="" />
  </div>
</div>
</div>
  </div>
  <div style={{
    fontSize:'1.6vh', 
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'justify',
    color:'white'
  }} class="itm3">
     <h1 style={{
      height:'4vh',
        color:'white'
    }}>Infor</h1>
Discover more about infor. With our industry-leading solution for integrating Infor’s sector-specific ERP with your e-commerce, CRM, PIM, and other technologies, you can eliminate manual effort and increase productivity.
    </div>  
  <div style={{
         fontSize:'2vh', 
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         textAlign:'justify',
              color:'white'
  }} class="itm4">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>SAP</h1>
One of the most popular enterprises resource planning (ERP) tools worldwide is SAP. Such software enables complete operational optimization of corporate processes. Its use is essentially required for large businesses because it is the sole means of preserving true control over internal operations. SAP streamlines and simplifies the management of many company operations.For instance, you can: Maintain financial and tax compliance,Track costs,Use it as a resource for managing human resources, Organize your work,Control the quality of your products,Making reports ,Analyze the results of your business,Control sales & Keep track of how things are made.


  </div>
    <div  style={{
  fontSize:'2vh', 
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'justify',
  color:'white'
  }}class="itm5">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>Oracle</h1>
Nearly every industry and business of any size can benefit from Oracle’s ERP software, which includes JD Edwards, ERP Cloud, and NetSuite. ERP implementation benefits businesses by improving access to precise data, integrating fragmented systems, managing 
    </div>


</div>
<div class="grid-container3">
  <div style={{
  
     color:'white',
     backgroundColor:'#626363'
  }} class="item31">
     <h1  style={{
    fontSize:'4vh',
    color:'white'

}}>Digital Transformation</h1>
  <img  src={line8} />
  
  <p style={{
          fontSize:'1.8vh',
          textAlign:'justify',
          color:'white',
          backgroundColor:'#626363'
  }}>
  Although change has always been an aspect of business, it is happening more quickly now. Multi-year programs for digital transformation are no longer an option in the modern company environment. The day will be ruled by speed, agility, and momentum.
  </p>
  </div>
  <div style={{
          fontSize:'1.6vh', 
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'justify',
          color:'white'
  }} class="item32">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>Migration From
    Legacy Systems</h1>
    We have an outmoded piece of computing gear or software that is still in use and is referred to as a legacy system.
     These systems are often built on outdated, out-of-date technologies, even though they may still function 
     as intended and satisfy the needs for which they were initially intended. 
     An outdated IT system, or legacy system, is transferred to a more modern hardware or software platform during a legacy system migration.

  </div>
  <div style={{
       fontSize:'1.6vh', 
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       textAlign:'justify',
       color:'white'
  }} class="item33">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>Conversion to Cloud</h1>

Moving data and applications to cloud (online) environments can be summed up as cloud transformation. Moving data from one location, one format, or one application to another is referred to as data migration. These days, companies frequently begin data mig
</div>  
 
   


</div>
<div class="grid-container4">
  <div style={{
    backgroundColor:'#626363',
     color:'white'
  }} class="item41">
     <h1 style={{
    fontSize:'4vh',
    color:'white'

}}>Salesforce</h1>
  <img  src={line8} />
  
  <p style={{
          fontSize:'1.8vh',
          textAlign:'justify',
          color:'white',
          backgroundColor:'#626363'
  }}>Salesforce offers easy, strong, and secure application programming interfaces (API) for programmatic access to the data. Use clicks or code to integrate your apps with systems and data sources. Discover a variety of APIs, platform events, integration technical
  </p>
  </div>
  <div style={{
  fontSize:'1.6vh', 
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'justify',
  color:'white'
  }} class="item42">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>Integration-API</h1>

API integration is the link between two or more programs through their APIs (application programming interfaces), which enables systems to exchange data sources. To keep data synchronized, increase productivity, and generate income, API interfaces enable a
  </div>
  <div style={{
        fontSize:'1.5vh', 
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
  
        textAlign:'justify',
        color:'white'
       
  }} class="item43">
     <h1 style={{
      height:'4vh',
      color:'white'
    }}>Rectangle 13</h1>
 One of the most adaptable web content management systems on the market is WordPress. There are tens of thousands of plugins accessible for your needs in addition to being open source, which enables the incremental extension and business process automation.
 </div>  
</div>
 
 </div>

   </>
      
    )

}
export default Services;
