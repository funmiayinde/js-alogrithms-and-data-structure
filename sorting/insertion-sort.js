function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j = i - 1;
    for ( ; j >= 0 && arr[j] > currentVal; j--){
      arr[j + 1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}