import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import ParticlesBackground from "./Components/ParticlesBackground";
import { Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      
      <ParticlesBackground>
        
      </ParticlesBackground>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
        {/* <Footer></Footer> */}
    </>
  );
}

export default App;
