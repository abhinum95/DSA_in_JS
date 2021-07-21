function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      if (arr[i] < arr[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return arr;
}

let arr1 = [1, 23, 454, 65667, 676, 543, 4, 2342, 1];
let arr2 = [];
let arr3 = [221, 23, 04, 667, 62376, 1543, 34, 432, 122];
let arr4 = [1];
let arr5 = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 2, 1];

console.log(insertionSort(arr1));
console.log(insertionSort(arr2));
console.log(insertionSort(arr3));
console.log(insertionSort(arr4));
console.log(insertionSort(arr5));
