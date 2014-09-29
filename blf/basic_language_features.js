/**
 * Converts arguments to an array
 * @author jim-y
 * @return {Array} the converted arguments object
 */
function arguments2array() {
  //return Array.prototype.slice.apply(arguments);
  return Array.prototype.slice.call(arguments);
}

/**
 * A handy function, that demonstrates one possible usecase of arguments 2 array
 * conversion, with leaving out some arguments by to be accessible by name.
 * arguments2arrayQuirck('::', 1, 2, 3)
 * > "1::2::3"
 * @author jim-y
 * @param  {*} separator something we want to access by name
 * @return {*}
 */
function arguments2arrayQuirck(separator) {
  var args = [].slice.call(arguments, 1);
  return args.join(separator);
}
