const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});
