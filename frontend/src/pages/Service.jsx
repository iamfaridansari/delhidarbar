import React, { useEffect, useRef } from "react";
import { services } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Service = () => {
  gsap.registerPlugin(ScrollTrigger);
  const topic = useRef(null);
  //
  const service = useRef([]);
  service.current = [];
  const addService = (item) => {
    if (item && !service.current.includes(item)) {
      service.current.push(item);
    }
  };

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });
    //
    service.current.forEach((item) => {
      gsap.from(item, {
        scale: 0.7,
        opacity: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        stagger: 1,
      });
    });
  }, []);

  //
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container-fluid p-0 serviceBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Services
        </h1>
      </div>

      <div className="container">
        <div className="row align-items-start justify-content-center text-center mt-5">
          {services.map((item, index) => {
            return (
              <div className="col-md-6 mb-5" key={index} ref={addService}>
                <img src={item.img} className="mb-2 rounded servicesImg" alt="" />
                <h2 className="mb-2">{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
