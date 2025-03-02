/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let i = 0,
    j = 0;
  const res = [];

  while (i < nums1.length && j < nums2.length) {
    const [id1, value1] = nums1[i];
    const [id2, value2] = nums2[j];
    if (id1 === id2) {
      res.push([id1, value1 + value2]);
      i++;
      j++;
    } else if (id1 < id2) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    res.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    res.push(nums2[j]);
    j++;
  }

  return res;
};
