import React, { useEffect, useRef } from "react";
import jaffer from "../assets/image/jaffer.jpeg";
import { quote } from "../components/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  //
  const storyRef = useRef(null);
  const topic = useRef(null);
  //
  const jafferImg = useRef(null);

  // quote
  const quotes = useRef([]);
  quotes.current = [];
  const addQuotes = (item) => {
    if (item && !quotes.current.includes(item)) {
      quotes.current.push(item);
    }
  };

  // name
  const name = useRef(null);

  useEffect(() => {
    gsap.from(topic.current, {
      letterSpacing: "10px",
      opacity: 0.5,
      duration: 1,
    });

    //
    let jafferTimeline = gsap.timeline({});
    //
    jafferTimeline.from(jafferImg.current, {
      transform: "scale(0.50) rotate(-90deg)",
      duration: 1,
    });
    quotes.current.forEach((item) => {
      jafferTimeline.from(item, {
        opacity: 0,
        duration: 0.1,
      });
    });
    jafferTimeline.from(name.current, {
      transform: "translateY(100%)",
      opacity: 0,
      duration: 0.5,
    });
    //
    gsap.from(storyRef.current, {
      duration: 1,
      height: 0,
    });
  }, []);
  return (
    <>
      <div className="container my-4">
        <div className="row align-items-start justify-content-md-between justify-content-center gap-md-0 gap-5">
          <div className="col-lg-4 col-md col-sm-8">
            <div className="jaffer text-center">
              <img src={jaffer} className="mb-5" ref={jafferImg} alt="" />
              <p className="quote text-center">
                {quote.map((item, index) => {
                  return (
                    <span key={index} ref={addQuotes}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="name text-end" ref={name}>
                - Jaffer Gulam Mansuri
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md text-center overflow-hidden" ref={storyRef}>
            <h2 className="mb-5">Man Behind Our Story, Jaffer Bhai !!!</h2>
            <p>
              1973 saw the inception of Jaffer Bhai's Delhi Darbar at Grant
              road, Mumbai. With the passion in his heart and hands lead to the
              best culinary art. Jaffer Bhai's philosophy was to be a
              perfectionist from start till the end. He believed in identifying
              the right ingredients for quality product. An avid chef for whom
              art of cooking is what he breathes for. Personal touch is of prime
              importance thus participating in kitchen for the menu prepared is
              like a second nature to him. <br />
              <br /> Jaffer Bhai's key areas to produce quality products are:
              In-depth Knowledge of raw material are of great importance as that
              defines the final product, and since jaffer bhai has been in the
              industry for over 50 years his judgment is impeccable for
              selecting the quality of the raw material. <br />
              <br /> The freshness of the product used characterize the quality
              of the product, thereby determining the sumptuous cuisine. The
              meat quality is so good that till date no other restaurant is
              close to it. <br />
              <br /> The “Biryani King of Mumbai”, Delhi Darbar's Jafferbhai
              Mansuri makes the best biryani and is the only restaurateur who
              can cook every item of food on the menu. <br />
              <br /> Compromising the quality or taste is not there in Jaffer
              Bhai's ingredients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
