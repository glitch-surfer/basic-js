const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  
  if(!activity 
    || typeof activity !== 'string' 
    || typeof +activity !== 'number'
    || +activity !== NaN ) {
      return false
    }

  let result = In(MODERN_ACTIVITY/activity)*HALF_LIFE_PERIOD/0.693;
 return result
}

module.exports = {
  dateSample
};
