/**
 * Capitalize the argument. Example: capitalize('test') -> 'Test'
 * @param  {string} word
 * @return {string}
 */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}