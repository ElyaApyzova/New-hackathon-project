import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import TreeCards from "./components/TreeCards";
import AboutUs from "./components/AboutUs/AboutUs";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TreeCards" element={<TreeCards />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
