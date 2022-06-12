import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </>
  );
};

export default Home;
