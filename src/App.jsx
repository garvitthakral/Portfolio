import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Pages/Components/Navbar";
import Home from "./Pages/Landing/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import ProjectDetails from "./Pages/Projects/ProjectDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About isStandalone={true}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
