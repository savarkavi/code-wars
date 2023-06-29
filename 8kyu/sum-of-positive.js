// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution -->

function positiveSum(arr) {
  let sum = 0;
  const positiveArr = arr.map((num) => {
    if (num > 0) {
      return num;
    } else {
      return 0;
    }
  });

  if (positiveArr) {
    positiveArr.forEach((n) => (sum += n));
  }
  return sum;
}
