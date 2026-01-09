var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");
const crypto = require("crypto");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user)
          return done(null, false, { message: "Incorrect email or password" });

        const isValid = verifyPassword(password, user.salt, user.passwordHash);
        if (!isValid)
          return done(null, false, { message: "Incorrect email or password" });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto
    .scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 })
    .toString("hex");
  return hashedPassword === hash;
}

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// module.exports = { verifyPassword, passport };
