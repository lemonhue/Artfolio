require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;
const DB_STRING = process.env.DB_STRING;
const authRoutes = require("./routes/authRoutes");
const cardRoutes = require("./routes/cardRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const multer = require("multer");
const session = require("express-session");
const passport = require("passport");
require("./middleware/passport");
const MongoStore = require("connect-mongo").default;
const connectDB = require("./util/db");

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

app.set("trust proxy", 1);

app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/card", cardRoutes);
app.use("/about", aboutRoutes);

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}`);
});
