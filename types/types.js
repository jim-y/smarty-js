/**
 * Type checker API. isObject is missing, because the meaning of such a function
 * is subjective in JavaScript. jQuery defines it different like underscore, for
 * the record:
 * http://api.jquery.com/jquery.isplainobject/
 * https://github.com/jashkenas/underscore/blob/master/underscore.js#L1107
 * I prefer jQuery's definition.
 * @return {Object} typer.API utility functions for JS type checking
 */
var typer = (function(toString) {
  return {
    isString: function(obj) { return toString.call(obj) === '[object String]'; },
    isFunction: function(obj) { return toString.call(obj) === '[object Function]'; },
    isDate: function(obj) { return toString.call(obj) === '[object Date]'; },
    isRegExp: function(obj) { return toString.call(obj) === '[object RegExp]'; },
    isBoolean: function(obj) { return toString.call(obj) === '[object Boolean]'; },
    isError: function(obj) { return toString.call(obj) === '[object Error]'; },
    isNumber: function(obj) { return toString.call(obj) === '[object Number]' && !isNaN(obj); },
    isArray: function(obj) { return Array.isArray ? Array.isArray(obj) : toString.call(obj) === '[object Array]'; },
    isNull: function(obj) { return obj === null; },
    isUndefined: function(obj) { return obj === void 0; }
  };
}(Object.prototype.toString));