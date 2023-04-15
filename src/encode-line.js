const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [...str]
  let result = ''
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i] === arr[i+1]) {
      arr[i] 
    }
  }
  return result
}

module.exports = {
  encodeLine
};
