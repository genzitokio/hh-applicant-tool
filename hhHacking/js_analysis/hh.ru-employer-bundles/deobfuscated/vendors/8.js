var r = require("./16.js");
var o = require("./21.js");
module.exports = require("./3.js") ? function (e, t, n) {
  return r.f(e, t, o(1, n));
} : function (e, t, n) {
  e[t] = n;
  return e;
};