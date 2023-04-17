const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }

  if (typeof str !== 'string') {
    str = String(str)
  }
  if (options.addition === null) {
    options.addition = String(options.addition)
  }

  let mainArr = []


  for (let i = 0; i < options.repeatTimes; ++i) {
    let additionArr = []
    let result = ''
    result += str

    for (let j = 0; j < options.additionRepeatTimes; ++j) {

      additionArr.push(options.addition)

    }

    let additionResult = additionArr.join(options.additionSeparator)
    result += additionResult
    mainArr.push(result)

  }

  result = mainArr.join(options.separator)
  return result
}

module.exports = {
  repeater
};
