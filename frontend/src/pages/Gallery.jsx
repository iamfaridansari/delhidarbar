import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { gallery } from "../components/data";
import ScrollTrigger from "gsap/ScrollTrigger";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const topic = useRef(null);
  //
  // const galleryRef = useRef([]);
  // galleryRef.current = [];
  // const addGalleryRef = (item) => {
  //   if (item && !galleryRef.current.includes(item)) {
  //     galleryRef.current.push(item);
  //   }
  // };

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
    });
    //
    // galleryRef.current.forEach((item) => {
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
      <div className="galleryBanner text-center mb-5">
        <h1 className="topic" ref={topic}>
          Gallery
        </h1>
      </div>

      <div className="container mb-5 galleryContainer">
        {gallery.map((item, index) => {
          return (
            <div
              className={"galleryItem rounded " + item.className}
              key={index}
              // ref={addGalleryRef}
            >
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
