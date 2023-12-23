const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  const result = [];
  let subarray = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
      subarray.push(arr[i]);
      sum += arr[i];
    } else {
      result.push(subarray);
      subarray = [arr[i]];
      sum = arr[i];
    }
  }

	
  if (subarray.length > 0) {
    result.push(subarray);
  }

  return result;


// Test cases
// console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
// console.log(divide([4, 3, 2, 1], 4)); // Output: [[4], [3], [2], [1]]

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
