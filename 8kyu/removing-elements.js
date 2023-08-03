// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// My solution -->

function removeEveryOther(arr) {
  const newArr = arr.filter((el, i) => i % 2 === 0);
  return newArr;
}
