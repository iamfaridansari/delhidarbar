import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/style/style.css";
import "./assets/style/responsive.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Outlets from "./pages/Outlets";
import Catering from "./pages/Catering";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
