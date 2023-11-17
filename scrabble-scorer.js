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
  // console.log(oldScrabbleScorer(newPrompt));
  return newPrompt
};

// let simpleScorer;
// const simpleLetters = {['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z']
// };

function simpleScorer(word) {
  // word = word.toUpperCase();
  // let scorer = 0;
  // simpleScorer = "";
  // for (let i = 0; i < word.length; i++) {
  // scorer += 1;
  //   }
  //   return scorer;
  return word.length
}



// let vowelBonusScorer;
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
//   } else {
// return vowelBonusScorer(word)  }
//   }
let newPointStructure = (transform(oldPointStructure));
function scrabbleScorer(word) {
  word = word.toLowerCase()
  let scrabbleScore = 0

  for (let i = 0; i < word.length; i++) {
    scrabbleScore += newPointStructure[word[i]];
  }

  return scrabbleScore;
}
// let scrabbleScorer;

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


// let userAnswer;
function scorerPrompt() {
  let numPrompt = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
\nEnter 0, 1, 2: `);
  let userInput = (Number(numPrompt));
  //add conditional maybe?
  // if (userInput === 0) {

  // userAnswer.push(userInput);
  return (scoringAlgorithms[userInput])
  // if (userInput === 0) {
  //   input.question(scoringAlgorithms[0].scoringFunction)
  // }
}
//using this function below to transform oldpointstructure to a new key
function transform(oldPointStructure) {
  let newPointLetters = {}
  // let newPointLetters = {}
  for (let idk in oldPointStructure) {
    // oldPointStructure[idk]
    for (i = 0; i < oldPointStructure[idk].length; i++) {
      //this console log is printing each key in oldpointstructure
      // console.log(oldPointStructure[idk][i]);
      // newPointLetters [`${idk[i]}`]
      newPointLetters[oldPointStructure[idk][i].toLowerCase()] = Number(idk)


      //  newPointLetters = oldPointStructure[idk]['2']
    }
  }
  return newPointLetters
};

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

  //  scorerPrompt();
  // scorerPrompt();
  // console.log(userAnswer)
  console.log(`Score for '${word}': ${scorerPrompt().scorerFunction(word)}`);
  //  console.log(`Score for '${word}`);
  //  console.log()
  //  console.log(vowelBonusScorer("dummy"));
  // scorerPrompt(this.)
  // console.log("Scrabble scoring values for");
  // console.log("letter a: ", newPointStructure.a);
  // console.log("letter j: ", newPointStructure.j);
  // console.log("letter z: ", newPointStructure["z"]);
  // console.log(newPointStructure)
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
