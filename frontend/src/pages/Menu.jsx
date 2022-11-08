import React, { useEffect, useRef } from "react";
import { menu } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Menu = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const addOverlay = (e) => {
    e.target.classList.add("active");
  };
  const removeOverlay = (e) => {
    e.target.classList.remove("active");
  };

  //
  const topic = useRef(null);

  // menu item
  // const menuItem = useRef([]);
  // menuItem.current = [];
  // const addMenuItem = (item) => {
  //   if (item && !menuItem.current.includes(item)) {
  //     menuItem.current.push(item);
  //   }
  // };

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });

    //
    // menuItem.current.forEach((item) => {
    //   gsap.from(item, {
    //     scale: 0.7,
    //     opacity: 0.5,
    //     scrollTrigger: {
    //       trigger: item,
    //       start: "top 80%",
    //       toggleActions: "play none none reverse",
    //     },
    //     stagger: 1,
    //   });
    // });
  });
  return (
    <>
      <div className="menuBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Menu
        </h1>
      </div>

      <div className="container menuContainer mb-5">
        {menu.map((item, index) => {
          return (
            <div
              className="menuItem rounded"
              key={index}
              onMouseEnter={addOverlay}
              onMouseLeave={removeOverlay}
              // ref={addMenuItem}
            >
              <div className="overlay">
                <h1>{item.name}</h1>
              </div>
              <img src={item.img} loading="lazy" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
