var r = require("./37.js");
var o = require("./11.js");
module.exports = function (e, t, n) {
  if (r(t)) {
    throw TypeError("String#" + n + " doesn't accept regex!");
  }
  return String(o(e));
};