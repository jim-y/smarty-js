/**
 * Populates an array with elements. Here map makes items populated with the 
 * array indicies, but map can do literally anything.
 * @author jim-y
 * @param  {number} num The length of the populated array
 * @return {Array}
 */
function populate(num) {
  return new Array(num).join().split(',').map(function(item, index) {
    return index;
  });
}
