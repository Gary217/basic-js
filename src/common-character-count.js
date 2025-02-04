const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCommonCharacterCount = (str1, str2) => {

  const sortStr1 = str1.split('').sort().join('');
  const sortStr2 = str2.split('').sort().join('');

  let i = 0;
  let result = '';

  while (i < str2.length) {
      if (sortStr1.slice(i).indexOf(sortStr2[i]) === -1) {
          i++;
      } else {
          result = result + sortStr2[i];
          i++;
      }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
