// express
const express = require("express");
const app = express();
app.use(express.json());

// cors
const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// dotenv
require("dotenv").config();
const port = process.env.PORT || 3001;

// mongoose
require("./database/connection");

// routes
app.use(require("./routes/route"));
app.get("/", (req, res) => {
  res.send("Jaffer Bhai's Delhi Darbar");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
