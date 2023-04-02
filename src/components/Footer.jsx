import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid p-0">
      <div className="container p-2">
        <div className="text-end pb-2"></div>

        <div className="row align-items-start justify-content-between gap-4 m-0">
          <div className="col-md p-0">
            <p className="text-capitalize">
              13-15-17, Dr. Maheshwari road, near Dongri <br /> police station,
              Umerkhadi, Noor Baug, <br /> Mumbai - 400 009
            </p>
            <a
              href="tel:02222016363
              "
              className="d-flex align-items-center justify-content-start my-2"
            >
              <FaPhoneAlt className="me-2" /> 022 2201 6363
            </a>
            <a
              href="tel:18002095233"
              className="d-flex align-items-center justify-content-start my-2"
            >
              <FaPhoneAlt className="me-2" /> 1800 209 5233
            </a>
            <a
              href="mailto:info@jafferbhaiscatering.com"
              className="d-flex align-items-center justify-content-start"
            >
              <FaEnvelope className="me-2" /> info@jafferbhaiscatering.com
            </a>
          </div>
          <div className="col-md p-0 text-end">
            <div className="logo mx-auto">
              <img src={logo} alt="" />
            </div>
            <p className="text-center">Developed by <a href="mailto:iamfaridansari@gmail.com" className="fw-bold">Farid Ansari</a></p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-capitalize pt-2">
            &copy; 2022 Jaffer bhai's delhi darbar catering All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
