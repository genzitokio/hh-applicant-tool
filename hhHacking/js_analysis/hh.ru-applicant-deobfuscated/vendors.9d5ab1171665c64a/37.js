var r = require("./1.js");
var o = require("./5.js");
var i = require("./6.js")("match");
module.exports = function (e) {
  var t;
  return r(e) && ((t = e[i]) !== undefined ? !!t : o(e) == "RegExp");
};
