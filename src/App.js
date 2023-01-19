
import './App.css';
import Home from './Home/Home';
import About from './ABOUT/About';
import Nav from './Nav';
import Blogs from './Blogs/Blogs';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from './Services/Services';
import Test from './Blogs/Test';
import CaseeStuide from './CaseStudies/CaseStuide';
import CaseStudiesDetail from './CaseStudies/CaseStudiesDetail'
import MainBlog from './Blogs/MainBlog';
import Blogs_detail from './Blogs/Blogs_detaill';
import Services_detail from './Services/Services_detail';
import Message from './ABOUT/Message';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/about" element={<Blogs_detail/>}></Route> */}
         <Route path='/Services' element={<Services_detail/>}> </Route>
        <Route path="/Blogs" element={<MainBlog/>} ></Route>
        <Route path="/Blogs/:id" element={<Blogs_detail/>} ></Route>
        <Route path="/CaseStudies" element={<CaseeStuide/>} ></Route>
        <Route path="/CaseStudies/:id" element={<Message/>} ></Route>
        

      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
