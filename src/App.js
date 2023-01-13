
import './App.css';
import Home from './Home/Home';
import About from './ABOUT/About';
import Nav from './Nav';
import Blogs from './Blogs/Blogs';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from './Services/Services';
import Test from './Blogs/Test';
import CaseeStuide from './CaseStudies/CaseStuide';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
         <Route path='/Services' element={<Services/>}> </Route>
        <Route path="/blogs" element={<CaseeStuide/>} ></Route>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
