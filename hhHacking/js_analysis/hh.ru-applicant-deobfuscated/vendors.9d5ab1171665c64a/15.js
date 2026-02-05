var r = require("./7.js");
var o = require("./25.js")(3);
r(r.P + r.F * !require("./33.js")([].some, true), "Array", {
  some: function (e) {
    return o(this, e, arguments[1]);
  },
});
