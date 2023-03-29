function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length/2; i++) {
    if (word[i]===word[word.length-(i+1)]) {continue}
    else{return false}
  }
  return true
}

/* 
  Add your pseudocode here
  Loop through half the word
    compare if the opposite letters are equal
    return true/false depending on result
*/

/*
  Add written explanation of your solution here
  for loop iterates through the 1st half of the word
  the if statement compares opposite letters moving closer to the middle with each loop
  if the aren't equal it stops and returns false
  else return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
