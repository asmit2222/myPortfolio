import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Testemonial from "./components/Testemonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Skills />
      <Resume />
      <Services />
      <Testemonial />
    </>
  );
}

export default App;
