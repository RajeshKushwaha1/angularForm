const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post("/enroll", function (req, res) {
  console.log(req.body);
  res.status(200).send({ message: "Data received" });
});

app.get("/", function (req, res) {
  res.send("Hello form server");
});

app.listen(PORT, function () {
  console.log("Server running on localhost:" + PORT);
});
