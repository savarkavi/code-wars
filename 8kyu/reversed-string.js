// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution -->

function solution(str) {
  const reversedWord = str.split("").reverse().join("");
  return reversedWord;
}
