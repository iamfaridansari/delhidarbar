import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ContactForm = () => {
  gsap.registerPlugin(ScrollTrigger);
  const formRef = useRef(null);
  useEffect(() => {
    gsap.from(formRef.current, {
      transform: "translateX(-50%)",
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  //
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interested: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("")
      }, [5000])
    }
  }, [message])

  return (
    <form ref={formRef} onSubmit={submitForm}>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-6 mb-4">
          <input
            type="text"
            className="input"
            placeholder="Full name"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6 mb-4">
          <input
            type="email"
            className="input"
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6 mb-4">
          <input
            type="number"
            className="input"
            placeholder="Phone number"
            name="phone"
            value={input.phone}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6 mb-4">
          <input
            type="text"
            className="input"
            placeholder="City"
            name="city"
            value={input.city}
            onChange={handleInput}
          />
        </div>
        <div className="col-12 mb-4">
          <select
            className="input"
            name="interested"
            value={input.interested}
            onChange={handleInput}
          >
            <option defaultValue="Interested in">Interested in</option>
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            className="textarea"
            placeholder="Message"
            name="message"
            value={input.message}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="col-12">
          <h2 className={success ? "text-success" : "text-danger"}>{message}</h2>
        </div>
      </div>
      <div className="mt-2">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
