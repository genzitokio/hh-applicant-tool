var r = require("./1.js");
module.exports = function (e, t) {
  if (!r(e)) {
    return e;
  }
  var n;
  var o;
  if (t && typeof (n = e.toString) == "function" && !r((o = n.call(e)))) {
    return o;
  }
  if (typeof (n = e.valueOf) == "function" && !r((o = n.call(e)))) {
    return o;
  }
  if (!t && typeof (n = e.toString) == "function" && !r((o = n.call(e)))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};
