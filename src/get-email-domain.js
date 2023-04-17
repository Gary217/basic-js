const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
const getEmailDomain = (email) => {
  const index = email.indexOf('@');
  const result1 = email.slice(index + 1);

  let result2;
  if (result1.indexOf('@') !== -1) {
      const index2 = result1.indexOf('@');
      return result2 = result1.slice(index2 + 1);
  }

  return result1;
}

module.exports = {
  getEmailDomain
};
