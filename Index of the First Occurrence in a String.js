/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i in haystack) {
    if (+i + needle.length > haystack.length) {
      return -1;
    }
    if (haystack.substring(+i, +i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
