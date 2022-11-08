const express = require("express");
const router = express.Router();

const { Enquiry, Contact } = require("../model/schema");

// enquiry
router.post("/enquiry", async (req, res) => {
  const {
    name,
    phone,
    email,
    company,
    date,
    people,
    budget,
    cateringType,
    message,
  } = req.body;

  if (
    !name ||
    !phone ||
    !email ||
    !date ||
    !people ||
    !budget ||
    !cateringType
  ) {
    return res
      .status(422)
      .json({ success: false, message: "Enter complete details", status: 422 });
  }

  try {
    const newEnquiry = new Enquiry({
      name,
      phone,
      email,
      company,
      date,
      people,
      budget,
      cateringType,
      message,
    });
    await newEnquiry.save();
    res
      .status(201)
      .json({ success: true, message: "Your enquiry is saved", status: 201 });
  } catch (error) {
    console.log(error);
  }
});

// contact us
router.post("/contactus", async (req, res) => {
  const { name, email, phone, city, interested, message } = req.body;

  if (!name || !email || !phone || !city || !interested || !message) {
    return res
      .status(422)
      .json({ success: false, message: "Enter complete details", status: 422 });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      city,
      interested,
      message,
    });
    await newContact.save();
    res
      .status(201)
      .json({ success: true, message: "Your message is saved", status: 201 });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
