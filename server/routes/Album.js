const Album = require("../models/Album");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport");
const ensureAuthenticated = require("../middleware/ensureAuth");


router.get("/"), ensureAuthenticated, async (req, res) => {
    const album = await Album.find({});
    return res.status(200).json(album)
}
