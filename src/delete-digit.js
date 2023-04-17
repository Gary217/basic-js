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
const deleteDigit = (n) => {

  const str = String(n);
  const arr = [...str];

  let allArrs = [];
  for (let i = 0; i < arr.length; i++) {

      let deleteOne = [];

      deleteOne.push(...arr);
      deleteOne.splice(i, 1);
      allArrs.push(deleteOne);

  }

  let finalArrs = [];
  allArrs.forEach((value) => {
      finalArrs.push(value.join(''));
  });

  const result = Math.max.apply(null, finalArrs);
  return result;
}

module.exports = {
  deleteDigit
};
