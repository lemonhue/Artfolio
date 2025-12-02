var passport = require("passport");
var LocalStrategy = require("passport-local");
var GoogleStrategy = require("passport-google-oauth20");
var User = require("./models/User");
const crypto = require("crypto");

CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    try {
      const user = await User.findOne({ username: username });

      if (!user) {
        return cb(null, false, { message: "Incorrect username or password." });
      }

      const isValid = verifyPassword(password, user.salt, user.hash);

      if (!isValid) {
        return cb(null, false, { message: "Incorrect username or password." });
      }

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto
    .scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 })
    .toString("hex");
  return hashedPassword === hash;
}

module.exports = { verifyPassword };
