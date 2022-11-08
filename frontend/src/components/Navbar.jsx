import React, { useRef, useEffect } from "react";
import logo from "../assets/image/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMobileAlt,
} from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const navbar1 = useRef(null);
  const navbar2 = useRef(null);
  const logoRef = useRef(null);
  //
  const toggleNavbar = () => {
    navbar1.current.classList.toggle("active");
    navbar2.current.classList.toggle("active");
  };
  //
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    navbar1.current.classList.remove("active");
    navbar2.current.classList.remove("active");
  };
  //
  useEffect(() => {
    gsap.from(logoRef.current, {
      scale: 0.75,
      opacity: 0.5,
      duration: 1,
    });
  }, []);
  return (
    <nav className="containet-fluid p-2">
      <div className="d-flex align-items-start justify-content-between gap-4">
        {/*  */}
        <Link to="/" className="logo" ref={logoRef} onClick={scrollToTop}>
          <img src={logo} alt="" />
        </Link>
        {/*  */}

        <header className="d-flex align-items-stretch justify-content-between flex-column flex-grow-1">
          <div className="border-bottom p-2 navbar1" ref={navbar1}>
            <div className="logo d-lg-none">
              <img src={logo} alt="" />
            </div>
            <a
              href="mailto:info@jbddcatering.com"
              style={{ textTransform: "none" }}
              className="d-lg-block d-none"
            >
              info@jafferbhaiscatering.com
            </a>

            <p>the story of good food</p>

            <ul className="d-lg-flex d-none align-items-center justify-content-between gap-2">
              <li>
                <a href="/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jafferbhaisdelhidarbarcatering/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaMobileAlt />
                </a>
              </li>
            </ul>
          </div>
          {/*  */}

          {/*  */}
          <ul className="navbar2 mt-2" ref={navbar2}>
            <li>
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={scrollToTop}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={scrollToTop}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={scrollToTop}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/outlets" onClick={scrollToTop}>
                Outlets
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/awards" onClick={scrollToTop}>
                Awards
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/pressreleases" onClick={scrollToTop}>
                Press Releases
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/catering" onClick={scrollToTop}>
                Catering
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={scrollToTop}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={scrollToTop}>
                Contact us
              </NavLink>
            </li>
            <div className="closeNav d-lg-none" onClick={toggleNavbar}>
              <GiKnifeFork />
            </div>
          </ul>
          {/*  */}
        </header>
        {/*  */}

        <div className="hamburger p-lg-4 d-lg-none" onClick={toggleNavbar}>
          <GiKnifeFork />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
