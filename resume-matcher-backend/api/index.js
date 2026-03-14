const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Resume Matcher Backend Running");
});

module.exports = app;