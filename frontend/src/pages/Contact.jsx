import React, { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import gsap from "gsap";

const Contact = () => {
  const topic = useRef(null);

  const socialRef = useRef(null);

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });

    gsap.from(socialRef.current, {
      transform: "translateX(50%)",
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: socialRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <>
      <div className="contactBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Contact us
        </h1>
      </div>

      <div className="container mb-5" style={{ overflow: "hidden" }}>
        <div className="text-center mb-5">
          <h1>Want to Give Party / Bulk Order??</h1>
          <h2>Contact Us</h2>
        </div>

        <div className="row align-items-center justify-content-between gap-lg-0 gap-5">
          <div className="col-lg-6">
            <ContactForm />
          </div>
          <div className="col-lg-2 text-center">
            <h2>OR</h2>
          </div>
          <div className="col-lg-4 text-center" ref={socialRef}>
            <h2>
              <FaPhoneAlt className="me-2 icon mb-2" />{" "}
              <a href="tel:02222016363">022 2201 6363</a>
            </h2>
            <h2 className="my-4">
              <FaEnvelope className="me-2 icon" />{" "}
              <a href="mailto:info@jafferbhaiscatering.com">
                info@jafferbhaiscatering.com
              </a>
            </h2>
            <h2>
              Toll Free No: <a href="tel:18002095233">1800 209 5233</a>
            </h2>

            <div className="mt-5">
              <h2 className="mb-2">Connect with us via</h2>
              <ul className="d-flex align-items-center justify-content-center gap-4">
                <li>
                  <a href="/">
                    <FaFacebook className="icon facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaGoogle className="icon" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter className="icon twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
