var r = require("./32.js")("wks");
var o = require("./9.js");
var i = require("./0.js").Symbol;
var a = typeof i == "function";
(module.exports = function (e) {
  return (r[e] ||= (a && i[e]) || (a ? i : o)("Symbol." + e));
}).store = r;
