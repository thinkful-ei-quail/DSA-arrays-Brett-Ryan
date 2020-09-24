/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function mostCommon(sentence) {
  if (sentence.length === 0) {
    return null;
  }

  sentence = sentence.toLowerCase();

  let maxOccurrences = 0;
  let mostCommonCharacter = null;
  for (let i = 0; i < 26; i++) {
    // convert number to an a-z character
    const character = String.fromCharCode(97 + i);

    let count = 0;
    for (let j = 0; j < sentence.length; j++) {
      if (sentence.charAt(j) == character) {
        count++;
      }
    }
    if (count > maxOccurrences) {
      mostCommonCharacter = character;
      maxOccurrences = count;
    }
  }
  return mostCommonCharacter;
}
const sen1 =
  'unified field theory will reshape the dynamic plasma coolant pipes to form new kitty kibbles.';
console.log(`${mostCommon(sen1)} is the most common letter`);

// This is O(n) in the best, worst and average case,
// with a pretty high coefficient
// because you loop through the entire array 1 time for each letter.

function mostCommonTwo(sentence) {
  if (sentence.length === 0) {
    return null;
  }

  sentence = sentence.toLowerCase();

  const characters = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    const characterCode = sentence.charCodeAt(i);
    if (characterCode < 97 || characterCode > 122) {
      // Filter non a-z characters
      continue;
    }

    if (!(character in characters)) {
      characters[character] = 1;
    } else {
      characters[character]++;
    }
  }

  let mostCommonCharacter = null;
  let maxOccurrences = 0;
  for (let character in characters) {
    const count = characters[character];

    if (count > maxOccurrences) {
      mostCommonCharacter = character;
      maxOccurrences = count;
    }
  }
  return mostCommonCharacter;
}

const sen2 =
  'cool beans, neat socks, lots of rocks and a ton of locks get thrown into the grok';

console.log(`${mostCommonTwo(sen2)} is the most common letter`);

// This is still O(n), but you only need to loop through the string 1 time and the hash map 1 time;
// far fewer than the 26 times from the naive solution.
