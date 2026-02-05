var r = require("./0.js");
var o = require("./8.js");
var i = require("./23.js");
var a = require("./9.js")("src");
var s = Function.toString;
var u = ("" + s).split("toString");
require("./2.js").inspectSource = function (e) {
  return s.call(e);
};
(module.exports = function (e, t, n, s) {
  var c = typeof n == "function";
  if (c) {
    if (!i(n, "name")) {
      o(n, "name", t);
    }
  }
  if (e[t] !== n) {
    if (c) {
      if (!i(n, a)) {
        o(n, a, e[t] ? "" + e[t] : u.join(String(t)));
      }
    }
    if (e === r) {
      e[t] = n;
    } else if (s) {
      if (e[t]) {
        e[t] = n;
      } else {
        o(e, t, n);
      }
    } else {
      delete e[t];
      o(e, t, n);
    }
  }
})(Function.prototype, "toString", function () {
  return (typeof this == "function" && this[a]) || s.call(this);
});
