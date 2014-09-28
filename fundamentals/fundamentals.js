/**
 * Return the sum of an array of numbers
 * @param  {Array.<number>} arr
 * @return {number}
 */
function sum(arr) {
  return arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
}