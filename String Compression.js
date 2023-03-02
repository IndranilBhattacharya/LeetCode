/**
 * @param {character[]} arr
 * @param {{string:number}} map
 * @param {string} key
 */
const pushInToArray = (arr, map, key) => {
  arr.push(key);
  if (map[key] > 1) {
    [...`${map[key]}`].forEach((n) => {
      arr.push(n);
    });
  }
  map[key] = 0;
};

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  const charFrequency = {};
  const counters = [];

  chars.forEach((c, i) => {
    if (i > 0 && c != chars[i - 1]) {
      const key = chars[i - 1];
      pushInToArray(counters, charFrequency, key);
    }
    const charCount = charFrequency[c] ?? 0;
    charFrequency[c] = charCount + 1;
    if (i === chars.length - 1) {
      pushInToArray(counters, charFrequency, c);
    }
  });
  chars.splice(0, chars.length);
  counters.forEach((c) => {
    chars.push(c);
  });
  return chars.length;
};
