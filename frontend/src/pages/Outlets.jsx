import React, { useEffect, useRef } from "react";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { outlets } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Outlets = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const topic = useRef(null);
  // const formRef = useRef(null);

  // outlets
  const outletRef = useRef([]);
  outletRef.current = [];
  const addOutletRef = (item) => {
    if (item && !outletRef.current.includes(item)) {
      outletRef.current.push(item);
    }
  };

  useEffect(() => {
    let timeline1 = gsap.timeline({});
    timeline1.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });

    // form
    // timeline1.fromTo(
    //   formRef.current,
    //   {
    //     transform: "translate(-50%, 200%)",
    //     opacity: 0,
    //   },
    //   { transform: "translate(-50%, 50%)", opacity: 1 }
    // );

    // outlets
    outletRef.current.forEach((item) => {
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
      <div className="outletBanner">
        <h1 className="topic" ref={topic}>
          Outlets
        </h1>
        {/* <form ref={formRef}>
          <input type="text" placeholder="Search Our branch" />
          <button>
            <BiSearch />
          </button>
        </form> */}
      </div>

      <div className="my-sm-5 my-2"></div>
      <div className="container py-5">
        <div className="outletContainer">
          {outlets.map((item, index) => {
            return (
              <div
                className="outletCard rounded"
                key={index}
                ref={addOutletRef}
              >
                <div className="d-flex align-items-end justify-content-start gap-2 mb-4">
      
                  <div className="outletImg">
                    <img
                      src={item.img}
                      className="rounded border border-dark"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start justify-content-start mb-3">
                  <FaPhoneAlt className="me-2 primaryText" />
                  <div className="text-end">
                    <a href="tel:+912223715656">Tel: {item.phone}</a>
                  </div>
                </div>

                <div className="d-flex align-items-start justify-content-start text-start">
                  <p>
                    <MdLocationOn className=" primaryText me-2" />
                    {item.address}
                    <br />
                    <a href={item.direction} target="_blank" rel="noreferrer">
                      Direction <FaLongArrowAltRight />
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Outlets;
