var r = require("./7.js");
var o = require("./12.js");
var i = require("./36.js");
var a = "".endsWith;
r(r.P + r.F * require("./38.js")("endsWith"), "String", {
  endsWith: function (e) {
    var t = i(this, e, "endsWith");
    var n = arguments.length > 1 ? arguments[1] : undefined;
    var r = o(t.length);
    var s = n === undefined ? r : Math.min(o(n), r);
    var u = String(e);
    if (a) {
      return a.call(t, u, s);
    } else {
      return t.slice(s - u.length, s) === u;
    }
  }
});