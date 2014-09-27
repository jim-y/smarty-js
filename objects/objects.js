/**
 * for-in alternative
 */
var obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3
};
Object.keys(obj).forEach(function(prop) {
  console.log(obj[prop]);
});