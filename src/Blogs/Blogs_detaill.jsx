import React from "react";
import line8 from '../image/Line8.png';
import blog_detail_img from '../image/BlogDetail_img.png'
import background_img from '../image/blog_detail_background.png'
import Contact from "../Contact/Contact";
import { useParams } from "react-router-dom";

function Blogs_detail()
{  
  const params=useParams();
  console.log(params.id)

  

  const Blog_detail=[
  {  id:1,
     h1:'Cloud Computing & Its Benefits',
     p1:'If you’re still debating whether to adopt cloud migration, you’re already behind 90% of businesses. That indicates that enterprise workloads are largely already hosted on the cloud, making cloud adoption mainstream. Additionally, cloud migration has its dangers and disadvantages, j',
     h2:'Benefits of CloudComputing',
     p2:'Numerous businesses, from established corporations to fresh startups, are embracing cloud technology because of its many advantages. So cloud computing can be helpful whether you want to reduce the carbon footprint of your company or you need to preserve sensitive data.',
     h3:'More flexible',
     p3:'Flexible Flexibility is the keyword in today’s corporate world. Businesses need to be flexible enough to adapt as client and customer needs change frequently. Cloud computing can offer you the flexibility you need to gain a competitive edge. Businesses can free up resources—including financial and human resources—for use in other areas with the help of cloud computing. This frees them up from having to manage and maintain their own IT resources so they can focus more on pleasing clients and customers.',
     h4:'Reduce Costs',
     p4:'Many companies used their own internal computing resources prior to the development of cloud computing. This required hiring IT team members to oversee those resources and make sure sensitive information was kept secure. Without a doubt, all of this was expensive. Businesses can potentially achieve significant cost savings by switching from internal IT infrastructure to remote servers provided by third-party cloud platforms.',
     h5:'Fast simple and easy',
     p5:'The simplicity of cloud computing is its greatest asset. Many aspects of an organization can be streamlined with cloud computing, increasing efficiency. By utilizing cloud-based online apps, your firm may operate more effectively. You may shift anything from customer billing and invoicing to prospect management tools out of your office and into the cloud. Cloud computing enables businesses to concentrate and flourish in what they do best. Businesses that employ SaaS instead of internal resources outsource lower-priority or administrative tasks.',
     h6:'Disaster and Emergency Planning',
     p6:'The good news is that if a natural disaster strikes your company, your computing power is located elsewhere. Obviously, if the crisis affects your cloud provider, this is a drawback.',
     h7:'A better work-life balance',
     p7:'Many companies used their own internal computing resources prior to the development of cloud computing. This required hiring IT team members to oversee those resources and make sure sensitive information was kept secure. Without a doubt, all of this was expensive. Businesses can potentially achieve significant cost savings by switching from internal IT infrastructure to remote servers provided by third-party cloud platforms.',
     h8:'Improved cooperation',
     p8:'You can make data accessible whenever you need it and from any location thanks to cloud storage. People can access data from anywhere in the world using any device as long as they have an internet connection, thus they are not restricted to a specific place or device.  ',
     h9:'Advanced protection  ',
     p9:'Contrary to what many people believe, the depth and breadth of security features, automatic maintenance, and centralized management of cloud computing can actually increase your security posture. Reputable cloud providers also work with the best security professionals and use innovative solutions to ensure stronger security',
     h10:'Ending Words  ',
     p10:'Cloud computing is a strong, adaptable, and economical tool. It represents the future for many enterprises. More flexibility and dependability, improved performance and efficiency, and a reduction in IT expenditures are all provided by the cloud. Additionally, it enhances innovation, enabling businesses to cut down on time to market and include use cases for AI and machine learning in their plans. These basic benefits can also be translated into various associated benefits that can support remote workers, increase productivity, and enhance operational effectiveness.  '

  },
  {  id:2,
    h1:'The Benefits of Hiring an App Development Company ',
    p1:'',
    h2:'Better customer reach',
    p2:'Today, people use their mobile devices the majority of the time. Therefore, having a mobile app developed for your restaurant by an App Development Company might boost the number of customers you have. You can provide your consumers access to your restaurant by doing this. By doing this, you will become more well-liked and serve more customers each day. ',
    h3:'Increase your Brand Image',
    p3:'he best way to create and enhance your brand image is by having an app. Through a mobile application, you can promote your special offers, images of your restaurant, wonderful food, the services you offer, specialty cuisine on your menu, etc. Customers will pay attention to it and become more devoted to your brand. ',
    h4:'Building Trust',
    p4:'You can gain your consumers trust by using the reviews and ratings on your app. These factors are important today since people like to read internet reviews and ratings before purchasing a product or visiting a certain location. After that, they decide appropriately. ',
    h5:'Better Order and Delivery Process',
    p5:'Mobile App greatly simplifies the order and delivery process. Additionally, it aids in the digitization and personalization of all home delivery, dine-in, table reservation, and other kinds of orders. ',
    h6:'Effective Management',
    p6:'A companys management is crucial to its success. You can have an app created for you by app development companies that is tailored specifically to the needs of your restaurant. ',
    h7:'',
    p7:'Digitalization has clearly positive potential. It distinguishes you from your rivals, spreads awareness of your company, and, most importantly, increases sales for your company. Other than these, which are pretty much the only justifications for having a mobile app, there are a few other aspects that highlight its significance for restaurants. ',
    h8:'',
    p8:`Accessibility of search options to look out for different dishes and restaurants 

    - The choice for seat booking and ordering food 
    
    -Option to make In-App payments 
    
    Order records 
    
    Referral programs and coupons 
    
    customer care services 
    
    Push Notifications 
    
    Automated Q/A Services  `,
    h9:'Advanced protection  ',
    p9:'Contrary to what many people believe, the depth and breadth of security features, automatic maintenance, and centralized management of cloud computing can actually increase your security posture. Reputable cloud providers also work with the best security professionals and use innovative solutions to ensure stronger security',
    h10:'Ending Words  ',
    p10:'Cloud computing is a strong, adaptable, and economical tool. It represents the future for many enterprises. More flexibility and dependability, improved performance and efficiency, and a reduction in IT expenditures are all provided by the cloud. Additionally, it enhances innovation, enabling businesses to cut down on time to market and include use cases for AI and machine learning in their plans. These basic benefits can also be translated into various associated benefits that can support remote workers, increase productivity, and enhance operational effectiveness.  '

 },
 {  id:3,
  h1:`Digital Transformation's Advantages `,
  p1:`- There are many advantages to a digital transformation strategy, including:`,
  p2:`- By getting rid of labor-intensive, mistake-prone manual procedures, you can increase corporate efficiency in operations. `,
  p3:'- Processes are carried out immediately and with a high degree of consistency, giving you more timely and reliable data. ',
  p4:'- Data silos are dismantled, allowing information to move freely and orderly throughout your organization, improving communication.  ',
 p5:'- Since data can be accessible at any time and from any location, employees can be just as productive outside of the office as they are within. Remote data access is crucial, as we have learned from the COVID-19 epidemic.  ',
 p6:'- Since its simpler to involve clients in crucial steps of the process through data exchange, you gain stronger client involvement. ',
   p7:'- Due to your increased awareness of the operations of your company, you have better control over suppliers and vendors.  ',
p8:'- Due to the nearly complete elimination of human error, corporate processes are more consistent.   ',

  p9:'- People finally have access to the resources they require to work "smarter, not harder," as the saying goes, which results in higher employee morale.',

  p10:'All of these improvements quickly result in cost reductions, which inevitably also results in improved profit margins.   ',
    p11:`in improved profit margins. Finally, each organization should implement a digital transformation strategy as just the first step in enhancing both its performance and operations. Finding a business partner who can assist in putting that digital transformation into action is just as important as the process itself. Choosing an experienced IT company as a partner is essential to your success in this project if your corporation lacks experience with the transformation process and developing software systems. Remember that the most successful of your competitors have already begun or perhaps finished their digital transition. To expand and stay competitive in a market that will get more and more crowded over the next ten years and beyond, the majority of businesses must do this for many aspects of their operations.  `

},

]
    return(
        <>
         {
          <about/>
        }
          <div  className="background_Blogdetail_img">
        </div>
        {/* <img src={banner} alt="loading"/> */}
   
  <div class="centered">
      <h1  className='height' style={{
        fontSize:'50px',
        fontFamily:'roboto'
        
      }} >Cloud Computing</h1>
  
     </div>
   
<div className="Blogs_detail">


  {
  Blog_detail && Blog_detail?.length>0 && Blog_detail?.map((item)=>{
    if(item?.id==params?.id)
    {
      return(
        <>

      
      <div className="inner_Blogs_detail">

    <h1 style={{
      fontSize:'40px',
      color:'white'
    }}>
    {item.h1}
    </h1>
    <img style={{
      width:'180px',
      padding:'15px'
      
    }} src={line8} alt="" />

<p className="Blogdetail_para">{item.p1}</p>
<h1 className="BlogDetail_height">{item.h2}</h1>
<p className="Blogdetail_para">{item.p2}</p>
<h1 className="BlogDetail_height" >{item.h3}</h1>
<p className="Blogdetail_para" >{item.p3}</p>
<h1 className="BlogDetail_height">{item.h4}</h1>

<p className="Blogdetail_para">{item.p4}</p>
<h1 className="BlogDetail_height">{item.h5}</h1>
<p className="Blogdetail_para"> {item.p5}</p>
<h1 className="BlogDetail_height">{item.h6}</h1>
<p className="Blogdetail_para">{item.p6}</p>
<h1 className="BlogDetail_height">{item.h7}</h1>
<p className="Blogdetail_para">{item.p7}</p>


</div>

<div className="blogdetail_second">
<img className="Blog_img" src={blog_detail_img} alt="" />

<h1 className="BlogDetail_height">{item.h8}</h1>
<p className="Blogdetail_para">{item.p8}</p>
<h1 className="BlogDetail_height">{item.h9}</h1>
<p className="Blogdetail_para">{item.p9} </p>
<p className="Blogdetail_para">{item.p10} </p>
<p className="Blogdetail_para">{item.p11} </p>



</div>
</>
  )
}
})

}

</div>
<Contact/>



</>
)
}
export default Blogs_detail