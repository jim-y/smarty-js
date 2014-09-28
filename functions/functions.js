/**
 * Function composition. compose a new function from fun f and g, like we learned
 * in middle school: h = f o g -> h(a) = f(g(a)).
 * @param  {Function} f
 * @param  {Function} g
 * @return {Function}
 */
function compose(f,g) {
  return function() {
    return f(g.apply(null, arguments));
  }
}