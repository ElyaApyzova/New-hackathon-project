import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import TreeCards from "./components/TreeCards";
import AboutUs from "./components/AboutUs/AboutUs";
import Create from "./components/Creat/Create";
import FamilyTree from "./components/MyAppBar/FamilyTree";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";




function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/TreeCards" element={<TreeCards />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FamilyTree" element={<FamilyTree />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
