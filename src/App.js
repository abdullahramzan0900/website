
import './App.css';
import Home from './Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/abc" element={<Home/>}>
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
