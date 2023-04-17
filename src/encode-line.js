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
const encodeLine = (str) => {

  if (str === '') {
      return ''
  }
  
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {

      if (str[i] === str[i + 1]) {
          count += 1;
      } else {
          count += 1;
          arr.push(count + str[i]);
          count = 0;
      }
  }

  const newStr = arr.reduce((arr, value) => {
      return arr + value;
  }, '')

  const finalStr = newStr.replace(/[1]/g, '');

  return finalStr
}

module.exports = {
  encodeLine
};
