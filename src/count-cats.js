const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
      let result = 0
      for (let i = 0; i < backyard.length; ++i) {
          let item = backyard[i]
          if(backyard[i].includes("^^")) {
              for(let j = 0; j < backyard[i].length; ++j) {
                let item2 = backyard[i]
                if(item2[j] === "^^") {
                  result++
                }
              }
          }
      }
  /*     let arr = backyard.forEach(element => { element.find((item) => {
          item === "^^"
      })
  }) */
      return result
  }


module.exports = {
  countCats
};
