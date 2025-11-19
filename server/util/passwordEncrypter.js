const crypto = require("crypto");

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 })
    .toString("hex");

  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto
    .scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 })
    .toString("hex");
  return hashedPassword === hash;
}

module.exports = { hashPassword, verifyPassword };
