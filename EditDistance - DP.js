/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const word1Length = word1?.length ?? 0;
  const word2Length = word2?.length ?? 0;
  const matrix = [];

  for (let j = 0; j <= word2Length; j++) {
    matrix.push([]);
  }
  for (let i = 0; i <= word1Length; i++) {
    matrix[0][i] = +i;
  }
  for (let j = 0; j <= word2Length; j++) {
    matrix[j][0] = +j;
  }

  for (let j in word2) {
    for (let i in word1) {
      if (!(i >= 0 && j >= 0)) {
        continue;
      }

      const x = +j + 1;
      const y = +i + 1;

      if (word1[+i] === word2[+j]) {
        matrix[x][y] = +matrix[x - 1][y - 1];
      } else {
        matrix[x][y] =
          Math.min(
            +matrix[x - 1][y - 1],
            +matrix[x - 1][y],
            +matrix[x][y - 1]
          ) + 1;
      }
    }
  }

  return +matrix[word2Length][word1Length];
};
