var r = require("./28.js");
var o = Math.min;
module.exports = function (e) {
  if (e > 0) {
    return o(r(e), 9007199254740991);
  } else {
    return 0;
  }
};
