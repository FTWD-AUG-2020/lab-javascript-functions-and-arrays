// Iteration #1: Find the maximum
// let maxOfTwoNumbers = (numberOne, numberTwo) =>
//   numberOne > numberTwo ? numberOne : numberTwo;

// function maxOfTwoNumbers(x, y) {
//   if (x > y) return x;

//   return y;
// }

const maxOfTwoNumbers = (numberOne, numberTwo) =>
  Math.max(numberOne, numberTwo);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// const findLongestWord = (words) =>
//   words.length === 0 ? null :
//   words.sort((a, b) => b.length - a.length)[0]
function findLongestWord(arr) {

  let longest = ""
  if (arr.length === 0) {
    return null
  }
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest
}
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

// Iteration #8: Bonus