function quickSort(arr, leftIndex, rightIndex) {
  let index;
  if (arr.length > 1) {
    index = split(arr, leftIndex, rightIndex);

    if (leftIndex < index - 1) {
      quickSort(arr, leftIndex, index - 1);
    }

    if (rightIndex > index) {
      quickSort(arr, rightIndex, index - 1);
    }
  }
  return arr;
}

function split(arr, leftIndex, rightIndex) {
  let pivot = arr[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {
    while (pivot > arr[leftIndex]) {
      leftIndex++;
    }

    while (pivot < arr[rightIndex]) {
      rightIndex--;
    }

    if (leftIndex < rightIndex) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

let arr1 = [1, 23, 454, 65667, 676, 543, 4, 2342, 1];
let arr2 = [];
let arr3 = [221, 23, 04, 667, 62376, 1543, 5453, 34, 432, 122];
let arr4 = [1];
let arr5 = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 2, 1];

console.log(quickSort(arr1, 0, arr1.length - 1));
// console.log(quickSort(arr2, 0, arr2.length - 1));
console.log(quickSort(arr3, 0, arr3.length - 1));
console.log(quickSort(arr4, 0, arr4.length - 1));
console.log(quickSort(arr4, 0, arr5.length - 1));
