var r = require("./17.js");
var o = require("./18.js");
var i = require("./20.js");
var a = Object.defineProperty;
exports.f = require("./3.js") ? Object.defineProperty : function (e, t, n) {
  r(e);
  t = i(t, true);
  r(n);
  if (o) {
    try {
      return a(e, t, n);
    } catch (e) {}
  }
  if ("get" in n || "set" in n) {
    throw TypeError("Accessors not supported!");
  }
  if ("value" in n) {
    e[t] = n.value;
  }
  return e;
};