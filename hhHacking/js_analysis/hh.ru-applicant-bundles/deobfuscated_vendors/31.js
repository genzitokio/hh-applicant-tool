var r = require("./5.js");
module.exports = Array.isArray || function (e) {
  return r(e) == "Array";
};