function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(i, j, arr);
      }
    }
  }
  return arr;
}

function swap(index1, index2, arr) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let arr1 = [1, 23, 454, 65667, 676, 543, 4, 2342, 1];
let arr2 = [];
let arr3 = [221, 23, 04, 667, 62376, 1543, 34, 432, 122];
let arr4 = [1];
let arr5 = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 2, 1];

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));
console.log(bubbleSort(arr4));
console.log(bubbleSort(arr5));
