function countLetters(string) {
  var countObj = {};

  for (var i = 0; i < string.length; i++) {
    if (countObj[string[i]] === undefined) { //if it doesn't exists
      countObj[string[i]] = [i]; //create a new array and at the same time add the first index
    } else {
      countObj[string[i]].push(i); //if it already exists push the next position in the array
    }

  }

  return countObj;
}

console.log(countLetters('Lighthouse Labs is cool'));