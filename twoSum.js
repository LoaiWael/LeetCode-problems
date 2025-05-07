/**
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 */
function twoSum(arr, target) {
  let indiciesArr = []
  for (let i = 0; i < arr.length; i++) {     //O(n)
    for (let j = i + 1; j < arr.length; j++) {    //O(n)
      if (arr[i] + arr[j] === target) {
        indiciesArr.push(i, j);
      }
    }
  }
  return indiciesArr;
}

console.log(twoSum([3, 2, 4], 6));