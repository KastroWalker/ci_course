const express = require("express");
const cors = require("cors");
const app = express();
const students = require("./database");

app.use(cors());

app.get("/", (_req, res) => {
  res.status(200).send("Hello GH actions!");
});

app.get("/students", (_req, res) => {
  res.status(200).send(students);
});

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});

module.exports = app;
