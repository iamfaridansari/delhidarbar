import React, { useRef, useEffect, useState } from "react";
import { typeofcatering } from "./data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CateringForm = () => {
  gsap.registerPlugin(ScrollTrigger);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    gsap.from(leftRef.current, {
      transform: "translateX(-50%)",
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(rightRef.current, {
      transform: "translateX(50%)",
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  //
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    date: "",
    people: "",
    budget: "",
    type: "",
    message: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleRadio = (value) => {
    setInput({
      ...input,
      type: value,
    });
  };

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    //
    const { name, phone, email, company, date, people, budget, type, message } =
      input;
    try {
      const res = await fetch("/delhidarbar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          company,
          date,
          people,
          budget,
          type,
          message,
        }),
      });
      const data = await res.json();
      console.log(data);
      setMessage(data.message);
      if (res.status === 200) {
        setSuccess(true);
      } else if (res.status === 422) {
        setSuccess(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("");
      }, [5000]);
    }
  }, [message]);
  return (
    <form
      className="container mb-5"
      style={{ overflow: "hidden" }}
      onSubmit={submitForm}
    >
      <div className="row align-items-start justify-content-between gap-5">
        <div className="col-lg" ref={leftRef}>
          <div className="mb-4">
            <input
              type="text"
              className="input"
              placeholder="Full name"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="input"
              placeholder="Phone number"
              name="phone"
              value={input.phone}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="input"
              placeholder="Email address"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="input"
              placeholder="Company name"
              name="company"
              value={input.company}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <div className="row align-items-end justify-content-between">
              <div className="col-6">
                <p>Date and Time of the Event</p>
              </div>
              <div className="col-6">
                <input
                  type="date"
                  className="input"
                  placeholder="date"
                  name="date"
                  value={input.date}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="input"
              placeholder="Estimated number of people"
              name="people"
              value={input.people}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="input"
              placeholder="Estimated budget per head"
              name="budget"
              value={input.budget}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="col-lg" ref={rightRef}>
          <h2 className="mb-4">Catering type</h2>
          <div className="row align-items-start justify-content-between">
            {typeofcatering.map((item, index) => {
              return (
                <div className="col-6" key={index}>
                  <label className="type">
                    <input
                      type="radio"
                      name="type"
                      className="me-2"
                      value={item.name}
                      onClick={() => handleRadio(item.name)}
                    />
                    {item.name}
                  </label>
                </div>
              );
            })}
          </div>

          <h2 className="mt-5 mb-4">Additional information</h2>
          <textarea
            className="textarea"
            name="message"
            value={input.message}
            onChange={handleInput}
          ></textarea>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className={success ? "text-success mb-2" : "text-danger mb-2"}>{message}</p>
        <button className="button">Send Enquiry</button>
      </div>
    </form>
  );
};

export default CateringForm;
