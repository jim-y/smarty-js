/**
 * Question: What will be returned?
 * Answer: try out, and read the explanation here (hint: bar):
 * @author jim-y
 * @reading http://jim-y.github.io/javascript/2014/08/10/object-property-as-notastring-value/
 */
function objectPropsIssue() {
  var foo = bar = map = {};
  map[foo] = "foo";
  map[bar] = "bar";
  return map[foo];
}

/**
 * I would assume that the return value will always be boolean, since && means, if leftOp AND rightOp are
 * both true, then return true, otherwise false. In JavaScript its not how && works!!!
 * The problem is, that the semantics are defined as ~ : if leftOp is true, then return rightOp
 * which can lead to unwanted errors. BAD sample, DON'T do this!
 * @author jim-y
 * @reading http://www.ecma-international.org/ecma-262/5.1/#sec-11.11
 * @return {(undefined|number)} !!!
 */
function easyToUseBadLogicalAND(arr) {
  return arr && arr.length;
}

// #################################
module.exports = {
  objectPropsIssue: objectPropsIssue
};
