// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution -->

function getCount(str) {
  const arr = str.split("");
  const arrVowels = arr.filter((char) =>
    ["a", "e", "i", "o", "u"].includes(char)
  );
  return arrVowels.length;
}
