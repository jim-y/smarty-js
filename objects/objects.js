/**
 * Alternative for in loop.
 * @author jim-y
 * @param  {Object} obj
 */
function forin(obj) {
  Object.keys(obj).forEach(function(prop) {
    console.log(obj[prop]);
  });
}

/**
 * Clone JavaScript objects without using any library
 * @author jim-y
 * @reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_native_JSON
 * @param  {Object} obj
 * @return {Object}
 */
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Clone objects using jQuery
 * @author jim-y
 * @deps jQuery
 * @param  {Object} obj
 * @return {Object}
 */
function jQclone(obj) {
  return jQuery.extend(true, {}, obj);
}

/**
 * Checks if two objects are the same. Mind, that it works well in cases, where
 * we have a default object, we clone it, then we want to investigate if the
 * cloned object was modified, or not.
 * @author jim-y
 * @param  {Object} obj the cloned object
 * @param  {Object} def the default object
 * @return {boolean}
 */
function modified(obj, def) {
  return JSON.stringify(obj) !== JSON.stringify(def);
}

module.exports = {
  clone: clone,
  jQclone: jQclone,
  modified: modified
};