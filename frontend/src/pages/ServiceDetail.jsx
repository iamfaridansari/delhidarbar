import React, { useRef, useEffect } from "react";
import { review } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServiceDetail = () => {
  gsap.registerPlugin(ScrollTrigger);
  //
  const reviewRef = useRef([]);
  reviewRef.current = [];
  const addReviewRef = (item) => {
    if (item && !reviewRef.current.includes(item)) {
      reviewRef.current.push(item);
    }
  };
  useEffect(() => {
    reviewRef.current.forEach((item) => {
      gsap.from(item, {
        transform: "scale(1.25)",
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 80%",
          toggleActions: "play none none reverse",
          scrub: 2,
        },
      });
    });
  }, []);
  return (
    <>
      <div className="container-fluid p-0 serviceDetailBanner text-center mb-5"></div>

      <div className="container mb-5 text-center">
        <h1 className="mb-4">Wedding</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum
          ipsum nobis incidunt dolorum, iure recusandae a quas aperiam error,
          voluptatibus animi voluptatum maiores, quos veritatis omnis! Soluta,
          alias laudantium? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque nostrum ipsum nobis incidunt dolorum, iure recusandae a
          quas aperiam error, voluptatibus animi voluptatum maiores, quos
          veritatis omnis! Soluta, alias laudantium?
        </p>
        <h1 className="my-5">Clients review</h1>

        <div className="reviewContainer">
          {review.map((item, index) => {
            return (
              <div className="reviewGrid" key={index} ref={addReviewRef}>
                <div className="left">
                  <h1>{item.clientName}</h1>
                  <p>{item.count}</p>
                  <p className="mt-2">{item.body}</p>
                </div>
                <div className="right">
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
