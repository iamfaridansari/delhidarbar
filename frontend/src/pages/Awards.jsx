import React, { useEffect, useRef } from "react";
import { appreciation, awards, certificates } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Awards = () => {
  gsap.registerPlugin(ScrollTrigger);
  const topic = useRef(null);
  //
  const awardsRef = useRef([]);
  awardsRef.current = [];
  const addAwardsRef = (item) => {
    if (item && !awardsRef.current.includes(item)) {
      awardsRef.current.push(item);
    }
  };

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
      duration: 1,
    });
    //
    awardsRef.current.forEach((item) => {
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
  return (
    <>
      <div className="awardBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Awards
        </h1>
      </div>

      {/* awards */}
      <div className="container text-center mb-5">
        <h1 className="text-uppercase mb-4">Awards</h1>
        <div className="row align-items-start justify-content-center">
          {awards.map((item, index) => {
            return (
              <div
                className="col-xxl-2 col-lg-3 col-6 mb-4"
                key={index}
                ref={addAwardsRef}
              >
                <img src={item.img} className="mb-2 rounded" alt="" />
                <p className="text-uppercase">{item.title}</p>
                <p>{item.year}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* certificate */}
      <div className="container text-center mb-5">
        <h1 className="text-uppercase mb-4">Certificates</h1>
        <div className="row align-items-start justify-content-center">
          {certificates.map((item, index) => {
            return (
              <div
                className="col-xxl-2 col-lg-3 col-6 mb-4"
                key={index}
                ref={addAwardsRef}
              >
                <img src={item.img} className="mb-2 rounded" alt="" />
                <p className="text-uppercase">{item.title}</p>
                <p>{item.year}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* appreciation */}
      <div className="container text-center">
        <h1 className="text-uppercase mb-4">Appreciation</h1>
        <div className="row align-items-start justify-content-center">
          {appreciation.map((item, index) => {
            return (
              <div
                className="col-xxl-2 col-lg-3 col-6 mb-4"
                key={index}
                ref={addAwardsRef}
              >
                <img src={item.img} className="mb-2 rounded" alt="" />
                <p className="text-uppercase">{item.title}</p>
                <p>{item.year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Awards;
