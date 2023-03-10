
import React, {useState} from 'react';
import img_arrow from './image/img_arrow_up.svg'

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled> 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className='scrollbutton'  onClick={()=>{
        scrollToTop();

    }} style={{
        
        display: visible ? 'inline' : 'none',
    }} >
  <img src={img_arrow} alt="" />
    </button>
  );
}
  
export default ScrollButton;