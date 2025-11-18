require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const axios = require("axios");
const app = express();
const PORT = process.env.PORT;
const DB_Host = process.env.DB_HOST;
const adminRoutes = require("./routes/Admin");
const cardRoutes = require("./routes/Card");
const categoryRoutes = require("./routes/Category");
const subcategoryRoutes = require("./routes/Subcategory");
const aboutRoutes = require("./routes/About");

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));

const router = express.Router();

mongoose
  .connect(DB_Host)
  .then(async () => {
    console.log("Successfully connected to DB");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("server is running");
});

app.use("/admin", adminRoutes);
app.use("/card", cardRoutes);
app.use("/about", cardRoutes);
app.use("/category", cardRoutes);
app.use("/subcategory", cardRoutes);
