require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const DB_STRING = process.env.DB_STRING;
const userRoutes = require("./routes/User");
const cardRoutes = require("./routes/Card");
const categoryRoutes = require("./routes/Category");
const subcategoryRoutes = require("./routes/Subcategory");
const aboutRoutes = require("./routes/About");
const multer = require("multer");
const session = require("express-session");
const passport = require("passport");
require("./middleware/passport");
const MongoStore = require("connect-mongo").default;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

const sessionStore = MongoStore.create({
  mongoUrl: process.env.DB_STRING,
  collection: "sessions",
});

app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRoutes);
app.use("/card", cardRoutes);
app.use("/about", aboutRoutes);
app.use("/category", cardRoutes);
app.use("/subcategory", cardRoutes);

mongoose
  .connect(DB_STRING)
  .then(async () => {
    console.log("Successfully connected to DB");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("server is running");
});
