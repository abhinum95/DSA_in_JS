function mergeHelper(arrLeft, arrRight) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrLeft.length && rightIndex < arrRight.length) {
    if (arrLeft[leftIndex] < arrRight[rightIndex]) {
      results.push(arrLeft[leftIndex++]);
    } else {
      results.push(arrRight[rightIndex++]);
    }
  }

  let leftRemains = arrLeft.slice(leftIndex);
  let rightRemains = arrRight.slice(rightIndex);

  return [...results, ...leftRemains, ...rightRemains];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, midPoint);
  let rightArray = arr.slice(midPoint);
  return mergeHelper(mergeSort(leftArray), mergeSort(rightArray));
}

let arr1 = [1, 23, 454, 65667, 676, 543, 4, 2342, 1];
let arr2 = [];
let arr3 = [221, 23, 04, 667, 62376, 1543, 34, 432, 122];
let arr4 = [1];
let arr5 = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 2, 1];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));
console.log(mergeSort(arr4));
console.log(mergeSort(arr5));
