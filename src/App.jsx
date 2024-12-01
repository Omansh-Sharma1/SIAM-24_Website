import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Correct import path for Layout in src directory
import Home from "./components/Home/Home"; // Adjust the path as necessary
import About from "./components/About/About"; // Adjust the path as necessary
import Contact from "./components/Contact/Contact"; // Adjust the path as necessary
import Team from "./components/Team/Team"; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
