var express = require("express");
var passport = require("passport");
var mongoose = require("mongoose");
var LocalStrategy = require("passport-local");
var crypto = require("crypto");
const { verifyPassword } = require("./passwordEncrypter");

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    db.get(
      "SELECT * FROM users WHERE username =?",
      [username],
      function (err, row) {
        if (err) {
          return cb(err);
        }
        if (!row) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        const isValid = verifyPassword(password, row.salt, row.hash);

        if (!isValid) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        return cb(null, row);
      }
    );
  })
);
