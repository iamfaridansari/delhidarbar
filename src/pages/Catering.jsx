import React, { useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFax } from "react-icons/fa";
import CateringForm from "../components/CateringForm";
import gsap from "gsap";

const Catering = () => {
  //
  const topic = useRef(null);

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });
  });
  return (
    <>
       <div className="container text-center my-4">
        <h1>Outdoor and Interstate Catering Division</h1>
        <p>
          <MdLocationOn className="primaryText me-2" />
          13-15-17, Dr. Meishwari Road, Next to Dongri Police Station, Noor
          Baug, Mumbai - 400 009
        </p>
        <p>
          <FaPhoneAlt className="primaryText me-2" />
          Tel: ( +91 22 ) <a href="tel:+912223715656">2371 5656</a> /{" "}
          <a href="tel:+912223714242">2371 4242</a> /{" "}
          <a href="tel:+912223793333">2379 3333</a>
        </p>
        <p>
          <FaFax className="primaryText me-2" />
          Tel: ( +91 22 ) <a href="tel:+912223754141">2375 4141</a>
        </p>

        <p className="mt-5">
          Using this online form will help us to revert to your queries more
          efficiently as your question can easily be forwarded to the relevant
          department who will then reply, by email, or contact you to discuss.
        </p>
      </div>

      <CateringForm />
    </>
  );
};

export default Catering;
