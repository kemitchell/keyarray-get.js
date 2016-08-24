module.exports = function get(object, keyArray, surrogate) {
  if (keyArray.length === 0) {
    return object;
  } else {
    var firstKey = keyArray[0];
    if (object.hasOwnProperty(firstKey)) {
      return get(object[firstKey], keyArray.slice(1), surrogate);
    } else {
      return surrogate;
    }
  }
};
