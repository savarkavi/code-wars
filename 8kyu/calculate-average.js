// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution -->

function findAverage(array) {
  if (array.length) {
    let sum = 0;
    array.map((num) => {
      return (sum += num);
    });
    let avg = sum / array.length;
    return avg;
  }
  return 0;
}
