const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Basic addition calculator
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var sum = num1 + num2;
    res.send("The result is " + sum);
    console.log(sum);
})

// Basic BMI Calculator
app.get("/bmicalculator", (req, res) => {
  res.sendFile(path.join(__dirname,"../bmiCalculator.html"));
});

app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var BMI = weight/(height**2);
  res.send("Your BMI is "+ BMI);
});


app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});

