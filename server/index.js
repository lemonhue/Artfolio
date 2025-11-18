require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AboutModel = require("./models/About");
const AdminModel = require("./models/Admin");
const CardModel = require("./models/Card");
const CategoryModel = require("./models/Category");
const SubcategoryModel = require("./models/Subcategory");

const app = express();
const PORT = process.env.PORT;
const DB_Host = process.env.DB_HOST;

app.use(express.json());
app.use(cors());

const router = express.Router();

mongoose.connect(DB_Host);

app.listen(5173, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {});
