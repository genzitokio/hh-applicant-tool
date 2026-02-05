var r = require("./1.js");
var o = require("./0.js").document;
var i = r(o) && r(o.createElement);
module.exports = function (e) {
  if (i) {
    return o.createElement(e);
  } else {
    return {};
  }
};