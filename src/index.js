/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let totalLovers = 0;
  let arr = [...preferences];
  arr.unshift(0);

  for (let i = 1; i <= arr.length; i++) {
    recursion(counted = [], i);
  }

  function recursion(counted, i) {
    let lover = arr[i];
    if (counted.length < 3 && lover && lover != i) {
      counted.push(lover);
      return recursion(counted, lover);
    } else if (counted.length == 3 && counted[0] == lover) {
      counted.map(x => arr[x] = 0);
      totalLovers++
    }
  }

  return totalLovers;
};
