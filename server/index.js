const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AboutModel = require("./models/About");
const AdminModel = require("./models/Admin");
const CardModel = require("./models/Card");
const CategoryModel = require("./models/Category");
const SubcategoryModel = require("./models/Subcategory");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const router = express.Router();

mongoose.connect("mongodb://localhost:27017/card");

app.listen(3001, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {});
