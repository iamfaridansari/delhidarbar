import React, { useEffect, useRef } from "react";
import { services, testimonial, tagline, fineDine } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
  const testCard = useRef([]);
  testCard.current = [];
  const addTest = (item) => {
    if (item && !testCard.current.includes(item)) {
      testCard.current.push(item);
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
    testCard.current.forEach((item) => {
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

      {/* about */}
      <div className="container text-center mb-5">
        <h2 className="text-uppercase mb-4" ref={aboutHead}>
          About Us
        </h2>
        <p className="mb-2">
          With the passion in his heart and hands lead to the best culinary art.
          Jaffer Bhai's philosophy was to be a perfectionist from start till the
          end. He believed in identifying the right ingredients for quality
          product.
        </p>
        <Link to="/about" className="mt-4 button">
          Know more
        </Link>
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

      {/* how we work */}
      {/* <div className="container-fluid p-0 howWeWork mb-5"></div> */}

      {/* testimonial */}
      {/* <div className="container text-center overflow-hidden">
        <h2 className="text-uppercase mb-2" ref={testHead}>
          Testimonial
        </h2>
        <p>See what our clients say about us</p>

        <div className="container d-flex overflow-auto testContainer">
          {testimonial.map((item, index) => {
            return (
              <div className="testCard rounded" key={index} ref={addTest}>
                <div className="user">
                  <img src={item.img} alt="" />
                  <h2 className="my-2">{item.name}</h2>
                </div>
                <div className="text">
                  <p>{item.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default Home;
