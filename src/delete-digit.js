const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let arr = [...number.toString()]
  let result = 0
  for (let i = 0; i < arr.length; ++i) {
    let newArr = [...arr]
    newArr.splice(i, 1)
    if (result < +newArr.join('')) {
      result = +newArr.join('')
    }
  }
  return result
}

module.exports = {
  deleteDigit
};
