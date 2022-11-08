import React, { useRef, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
  const scrollRef = useRef(null);
  //
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 100) {
        scrollRef.current.classList.add("active");
      } else if (window.scrollY <= 100) {
        scrollRef.current.classList.remove("active");
      }
    };
  }, []);
  return (
    <div className="scrollToTop" ref={scrollRef} onClick={scrollToTop}>
      <BsFillArrowUpSquareFill className="icon" />
    </div>
  );
};

export default ScrollToTop;
