var r = require("./1.js");
var o = require("./31.js");
var i = require("./6.js")("species");
module.exports = function (e) {
  var t;
  if (o(e)) {
    if (typeof (t = e.constructor) == "function" && (t === Array || !!o(t.prototype))) {
      t = undefined;
    }
    if (r(t) && (t = t[i]) === null) {
      t = undefined;
    }
  }
  if (t === undefined) {
    return Array;
  } else {
    return t;
  }
};