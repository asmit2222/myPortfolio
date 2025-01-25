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
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <Home />
              <About />
              <Stats />
              <Skills />
              <Resume />
              <Portfolio />
              <Services />
              <Testemonial />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/services" element={<ServiceDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
