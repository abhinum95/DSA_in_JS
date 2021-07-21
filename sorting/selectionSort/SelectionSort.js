function selectionSort(arr) {
  let length = arr.length;
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(i, min, arr);
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

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));
console.log(selectionSort(arr4));
console.log(selectionSort(arr5));
