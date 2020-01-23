function pivot(arr, start = 0, end = arr.length - 1){

  function swap(array, i, j){
    let temp = array[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  let pivot = arr[start];
  let swapIdx = start;
  
  for (let i = start + 1; i < arr.length; i++){
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
// pivot([4,8,2,1,5,6,7,3]);

function quickSort(arr, left = 0, right = arr.length -1){
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
// quickSort([4,8,2,1,5,6,7,3]);