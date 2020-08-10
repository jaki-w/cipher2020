const sentence = prompt ("Enter a sentence:");

function firstLetterSeperator() {
  const firstLetter = sentence.charAt(0).toUpperCase();
  alert(firstLetter);
}

firstLetterSeperator();