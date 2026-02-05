exports.__esModule = true;
exports.default = function (e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    var r = e.name || "";
    var o = e.type || "";
    var i = o.replace(/\/.*$/, "");
    return n.some(function (e) {
      var t = e.trim();
      if (t.charAt(0) === ".") {
        return r.toLowerCase().endsWith(t.toLowerCase());
      } else if (t.endsWith("/*")) {
        return i === t.replace(/\/.*$/, "");
      } else {
        return o === t;
      }
    });
  }
  return true;
};
require("./14.js");
require("./34.js");