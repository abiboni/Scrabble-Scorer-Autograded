// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
        // letterPoints.push(oldPointStructure(word));
        // console.log(oldPointScorer(word));
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let newPrompt = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
  return newPrompt
};

function simpleScorer(word) {
  return word.length
}

//add conditional logic for vowel +3
function vowelBonusScorer(word) {
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  word = word.toUpperCase();
  let scorer = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      scorer += 3
    } else {
      scorer += 1;
    }
  }
  return scorer
}

let newPointStructure = (transform(oldPointStructure));

function scrabbleScorer(word) {
  word = word.toLowerCase()
  let scrabbleScore = 0

  for (let i = 0; i < word.length; i++) {
    scrabbleScore += newPointStructure[word[i]];
  }

  return scrabbleScore;
}

//put oldScrabble, simple, and vowel in array
const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScorer
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScorer
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scorerFunction: scrabbleScorer
  }];


function scorerPrompt() {
  let numPrompt = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
\nEnter 0, 1, 2: `);
  let userInput = (Number(numPrompt));
  return (scoringAlgorithms[userInput])
}

//using this function below to transform oldpointstructure to a new key
function transform(oldPointStructure) {
  let newPointLetters = {}
  for (let idk in oldPointStructure) {

    for (i = 0; i < oldPointStructure[idk].length; i++) {
      //this console log is printing each key in oldpointstructure
      // console.log(oldPointStructure[idk][i]);
      newPointLetters[oldPointStructure[idk][i].toLowerCase()] = Number(idk)
    }
  }
  return newPointLetters
};
//I did what I wasn't supposed to do so I'm leaving this here
// a: 1, 
// b: 3,
// c: 3,
// d: 2,
// e: 1,
// f: 4,
// g: 2,
// h: 4,
// i: 1,
// j: 8,
// k: 5,
// l: 1,
// m: 3,
// n: 1,
// o: 1,
// p: 3,
// q: 10,
// r: 1,
// s: 1,
// t: 1,
// u: 1,
// v: 4,
// w: 4,
// x: 8,
// y: 4,
// z: 10,


function runProgram() {
  let word = initialPrompt();
  console.log(`Score for '${word}': ${scorerPrompt().scorerFunction(word)}`);

}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
