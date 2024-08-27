var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Require the Aylien npm package
const aylien = require("aylien_textapi");

// You could call it aylienapi, or anything else
var textapi = new aylien({
  application_id: process.env.API_URL,
  application_key: process.env.API_KEY,
});

app.use(express.static("dist")); // Serve static files from the dist folder

console.log(`Your API key is ${process.env.API_KEY}`);

// POST route to process the NLP request
app.post("/analyze", function (req, res) {
  const userInput = req.body.text;
  textapi.sentiment({ text: userInput }, function (error, response) {
    if (error) {
      console.error(error);
      res.status(500).send("API request failed.");
    } else {
      res.send(response);
    }
  });
});
// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
