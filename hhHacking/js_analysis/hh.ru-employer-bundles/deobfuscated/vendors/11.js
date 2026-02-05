module.exports = function (e) {
  if (e == null) {
    throw TypeError("Can't call method on  " + e);
  }
  return e;
};