import React, { useEffect, useRef } from "react";
import { services, fineDine, tagline } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const introDiv = useRef(null);
  const aboutHead = useRef(null);
  const serviceHead = useRef(null);
  const testHead = useRef(null);

  //
  const fineDineRef = useRef([]);
  fineDineRef.current = [];
  const addFineDine = (item) => {
    if (item && !fineDineRef.current.includes(item)) {
      fineDineRef.current.push(item);
    }
  };

  //
  const titleRef = useRef([]);
  titleRef.current = [];
  const addTitle = (item) => {
    if (item && !titleRef.current.includes(item)) {
      titleRef.current.push(item);
    }
  };
  //
  const service = useRef([]);
  service.current = [];
  const addService = (item) => {
    if (item && !service.current.includes(item)) {
      service.current.push(item);
    }
  };

  useEffect(() => {
    let introTimeline = gsap.timeline({});
    //
    introTimeline.from(introDiv.current, {
      transform: "scale(2)",
      opacity: 0,
      duration: 1,
    });
    //
    fineDineRef.current.forEach((item) => {
      introTimeline.from(item, {
        opacity: 0,
        duration: 0.1,
      });
    });

    //
    titleRef.current.forEach((item) => {
      introTimeline.from(item, {
        opacity: 0,
        duration: 0.1,
      });
    });
    //
    gsap.from(aboutHead.current, {
      letterSpacing: "10px",
      opacity: 0.5,
      scrollTrigger: {
        trigger: aboutHead.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    //
    gsap.from(serviceHead.current, {
      letterSpacing: "10px",
      opacity: 0.5,
      scrollTrigger: {
        trigger: serviceHead.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(testHead.current, {
      letterSpacing: "10px",
      opacity: 0.5,
      scrollTrigger: {
        trigger: testHead.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
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
  return (
    <>
      {/* banner */}
      <div className="container-fluid p-2 mb-5 home1">
        <div className="intro" ref={introDiv}>
          <h1>
            {fineDine.map((item, index) => {
              return (
                <span className="text-uppercase" key={index} ref={addFineDine}>
                  {item}
                </span>
              );
            })}
          </h1>
        </div>
        <h1 className="title">
          {tagline.map((item, index) => {
            return (
              <span key={index} ref={addTitle}>
                {item}
              </span>
            );
          })}
        </h1>
      </div>

      {/* service */}
      <div className="container text-center">
        <h2 className="text-uppercase mb-2" ref={serviceHead}>
          Services
        </h2>

        <div className="row align-items-start justify-content-center mt-5 services">
          {services.map((item, index) => {
            return (
              <div className="col-md-6 mb-5" key={index} ref={addService}>
                <img src={item.img} className="mb-2 rounded" alt="" />
                <h2 className="mb-2">{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
