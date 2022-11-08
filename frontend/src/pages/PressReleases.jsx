import React, { useEffect, useRef } from "react";
import { press } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const PressReleases = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const topic = useRef(null);
  //
  const pressRef = useRef([]);
  pressRef.current = [];
  const addPressRef = (item) => {
    if (item && !pressRef.current.includes(item)) {
      pressRef.current.push(item);
    }
  };

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });
    //
    pressRef.current.forEach((item) => {
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
  });
  return (
    <>
      <div className="pressBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Press Release
        </h1>
      </div>

      <div className="container py-5">
        <div className="row align-items-center justify-content-center text-center">
          {press.map((item, index) => {
            return (
              <div
                className="col-xxl-2 col-lg-3 col-6 mb-4"
                key={index}
                ref={addPressRef}
              >
                <img src={item.img} className="mb-2 rounded" alt="" />
                <p className="text-uppercase">{item.title}</p>
                <p>{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PressReleases;
