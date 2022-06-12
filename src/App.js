import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ParticlesBackground from "./Components/ParticlesBackground";
import Skills from "./Components/Skills/Skills";
import { Routes, Route } from "react-router-dom";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/skill" element={<Skills></Skills>}></Route>
      </Routes> */}
      <ParticlesBackground>
        
      </ParticlesBackground>
        <Navbar></Navbar>
        <Header></Header>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
        {/* <Footer></Footer> */}
    </>
  );
}

export default App;
