// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// My solution -->

function countSheeps(arrayOfSheep) {
  const sheepArr = arrayOfSheep.filter((sheep) => sheep === true);
  return sheepArr.length;
}
