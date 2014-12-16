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

/**
 * Dummy example to demonstrate the nearly useless comma operator.
 * The comma operator's operands are expressions, and the values is as follows:
 * "Evaluates the lefthand expression, then the righthand expression is
 * evaluated and that is the result."
 * @author jim-y
 * @reading http://www.i-programmer.info/programming/javascript/6524-the-confusing-comma-in-javascript.html
 * @return {String}
 */
function theCommaOperator(one) {
  return (one = +!![]), 'I can write numbers like, '+ one + ', ' + ++one + ', ' + ++one + '.';
}

/**
 * Dummy example 2 for comma op. Used in a for loop to initialize multiple 
 * expressions. a.k.a batch the length of the array in a loop
 * @author jim-y
 * @reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator
 */
function theCommaOperator2(arr) {
  var i, j, len;
  for (i = 0, j = 0, len = arr.length; i < len; ++i, j += 2) {
    console.log(arr[i] - (j - i));
  };
}

// #################################
module.exports = {
  objectPropsIssue: objectPropsIssue
};
