const express = require("express");
const app = express();
var data = require("./dataSource.json");
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

//get
app.get("/api/orders", function (req, res) {
  return res.json({ result: data, count: data.length });
});
//create
app.post("/api/orders", function (req, res) {
  data.splice(0, 0, req.body.value);
  return res.status(200).send("Row inserted successfully");
});
//update
app.put("/api/orders/:id", function (req, res) {
  data = data.splice(0, 0, req.body.value);
  return res.status(200).send("Row updated successfully!!");
});
//delete
app.delete("/api/orders/:id", function (req, res) {
  data = data.filter((x) => x.OrderID != req.params.id);
  return res.status(200).send("Row Deleted successfully...");
});
app.listen(7500);
