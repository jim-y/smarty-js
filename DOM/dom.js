/**
 * jQuery.hasClass() basic alternative in VanillaJS.
 * @author jim-y
 * @param  {HTMLElement}  ele
 * @param  {string}       cls
 * @return {boolean}
 */
function hasClass(ele, cls) {
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

/**
 * jQuery.addClass() basic alternative in VanillaJS.
 * @author jim-y
 * @param {HTMLElement} ele
 * @param {string}      cls
 */
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += " " + cls;
  }
}

/**
 * jQuery.removeClass() basic alternative in VanillaJS.
 * @author jim-y
 * @param {HTMLElement} ele
 * @param {string}      cls
 */
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

/**
 * jQuery.toggleClass() basic alternative in VanillaJS.
 * @author jim-y
 * @param {HTMLElement} ele
 * @param {string}      cls
 */
function toggleClass(ele, cls) {
  if(hasClass(ele, cls)) {
    removeClass(ele, cls);
  } 
  else {
    addClass(ele, cls);
  }
}