/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let lastMin = -1;
  let lastMax = -1;
  let iSub = -1;
  let nSub = 0;
  nums.forEach((n, i) => {
    if (n >= minK && n <= maxK) {
      lastMin = n === minK ? i : lastMin;
      lastMax = n === maxK ? i : lastMax;
      nSub += Math.max(0, Math.min(lastMin, lastMax) - iSub);
    } else {
      lastMin = -1;
      lastMax = -1;
      iSub = i;
    }
  });
  return nSub;
};
