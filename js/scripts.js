const sentence = prompt ("Enter a sentence:");

let twoLetters = [];

function firstLetterSeperator() {
  const firstLetter = sentence.charAt(0).toUpperCase();
  const lastLetter = sentence.charAt(sentence.length -1).toUpperCase();
  twoLetters.push(firstLetter);
  twoLetters.push(lastLetter);
  console.log(twoLetters);
}

function reverseLetters() {
  const reversedLetters = twoLetters.reverse().join("");
  twoReversedLetters.push(reversedLetters); 
  alert(twoReversedLetters);
}

let twoReversedLetters = [];

function seperateAndReverse() {
  firstLetterSeperator();
  reverseLetters();
  const newSentence = sentence + twoReversedLetters;
  letterJoin.push(newSentence);
}

let letterJoin = [];

function middleLetter() {
 sentenceLength = sentence.length;
 middleLetterIndex = Math.floor(sentenceLength / 2);
 midLetter = sentence.charAt(middleLetterIndex);
 const letterJoin2 = midLetter + letterJoin;
 scrambledSentence.push(letterJoin2.split("").reverse().join(""));
 alert(scrambledSentence);
}
scrambledSentence = [];



seperateAndReverse();
middleLetter();