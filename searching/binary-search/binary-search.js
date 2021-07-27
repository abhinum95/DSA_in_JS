function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let arr1 = [0, 1, 2, 4, 5, 7, 44, 56, 67, 77, 89, 901];

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr1, 901));
