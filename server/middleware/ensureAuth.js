var passport = require("passport");

function ensureAuthenticated(req, res, next) {
  console.log("req", req);
  if (req.isAuthenticated()) {
    return next(); 
  }
  return res.status(401).json({ message: "Unauthorized" });
}


module.exports = ensureAuthenticated;