/**
 * Converts a values to integer, or returns 0 if could not be converted
 * check also:
 * http://speakingjs.com/es5/ch11.html#_bitwise_or
 * @param {*} obj
 */
function toInt(obj) {
  return 0|obj;
}

/**
 * To trunkate the decimal part without using Math.floor()
 * @param {number} num
 */
function trunc(num) {
  return num - num % 1;
}

/**
 * Only the NaN values is not equal to itself in the language.
 * @param  {Object}  obj
 * @return {boolean}
 */
function isNaN(obj) {
  return obj !== obj;
}