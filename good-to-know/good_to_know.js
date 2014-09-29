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

module.exports = {
  objectPropsIssue: objectPropsIssue
};