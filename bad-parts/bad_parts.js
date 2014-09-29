/**
 * In JavaScript there's automatic semicolon insertion, that is, you are not forced
 * to use semicolons, because they will be inserted automatically. Hence, omitting
 * them could lead to hard-to-track errors. semicolonInsertionBAD shows the most
 * popular scenario where something could go bad. Th error
 * //     logMe: function(obj) {
 * //                    ^
 * // SyntaxError: Unexpected token (
 * @author jim-y
 * @reading http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
 * @return {Object} an object literal is inteded to be returned, but... read on ;)
 */
function semicolonInsertionBAD() {
  return
  {
    logMe: function(obj) {
      console.log(obj);
    }
  }
}

function semicolonInsertionGOOD(argument) {
  return {
    logMe: function(obj) {
      console.log(obj);
    }
  };
}
