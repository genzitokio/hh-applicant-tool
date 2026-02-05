var r = require("./6.js")("match");
module.exports = function (e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch (n) {
    try {
      t[r] = false;
      return !"/./"[e](t);
    } catch (e) {}
  }
  return true;
};
