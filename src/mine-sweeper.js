const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let str = matrix.join().split(',');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'true') {
      str[i] = 1;
    } else {
      str[i] = 2;
    }
  }

  let arr = [];
  for (let i = 0, count = 0; i < str.length; i++, count++) {
    if (count === 2) {
      arr.push([str[i - 2], str[i - 1], str[i]]);
      count = -1;
    }
  }
  return arr;
};

module.exports = {
  minesweeper
};
