function getDigit(num, idx) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

function digitCount(num){
  if (num === 0)
      return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++){
    console.log(maxDigits);
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// mostDigits([2,30,400,300011,4,90]);