const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  cateringType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  interested: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//
const Enquiry = mongoose.model("Enquiry", enquirySchema);
const Contact = mongoose.model("Contact", contactSchema);
//
module.exports = { Enquiry, Contact };
