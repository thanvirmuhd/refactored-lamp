const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = 'Rj2S?RVe9[]8-dCS6A**&b5Tsg$gwbg~Bd{*QTK';

const createAccessToken = (payload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET);
}

module.exports = {
  createAccessToken,
}
