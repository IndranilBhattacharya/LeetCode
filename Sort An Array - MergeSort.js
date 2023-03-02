/**
 * @param {number[]} nums
 */
const mergeSort = (nums) => {
  const numsLength = nums?.length ?? 0;
  if (numsLength <= 1) {
    return;
  }

  const halfIndex = Math.floor(numsLength / 2);
  const leftHalf = nums.slice(0, halfIndex);
  const rightHalf = nums.slice(halfIndex, numsLength);

  mergeSort(leftHalf);
  mergeSort(rightHalf);

  let l = 0;
  let r = 0;
  const leftLength = leftHalf?.length ?? 0;
  const rightLength = rightHalf?.length ?? 0;

  let i = 0;

  while (l < leftLength && r < rightLength) {
    if (leftHalf[l] <= rightHalf[r]) {
      nums[i] = leftHalf[l];
      l++;
    } else {
      nums[i] = rightHalf[r];
      r++;
    }
    i++;
  }

  while (l < leftLength) {
    nums[i] = leftHalf[l];
    l++;
    i++;
  }
  while (r < rightLength) {
    nums[i] = rightHalf[r];
    r++;
    i++;
  }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  mergeSort(nums);
  return nums;
};
