import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/style/style.css";
import "./assets/style/responsive.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Outlets from "./pages/Outlets";
import Awards from "./pages/Awards";
import PressReleases from "./pages/PressReleases";
import Catering from "./pages/Catering";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/pressreleases" element={<PressReleases />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicedetail" element={<ServiceDetail />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
