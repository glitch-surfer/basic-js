const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(initialArr) {
  if (!Array.isArray(initialArr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let arr = [...initialArr]
  let result = []

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === '--discard-next') {
      arr.splice(i, 2)
      continue
    }
    if (arr[i] === '--discard-prev') {
      result.splice(i - 1, 1)
      continue
    }
    if (arr[i] === '--double-next') {
      arr[i] = arr[i + 1]
    }
    if (arr[i] === '--double-prev') {
      arr[i] = arr[i - 1]
    }

    if(arr[i]) {result.push(arr[i])}
  }
  
  
  
  return result
}

module.exports = {
  transform
};
