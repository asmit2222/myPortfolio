import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Skills />
      <Resume />
    </>
  );
}

export default App;
