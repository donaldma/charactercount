function countLetters(string) {
  var countObj = {};
  var noSpace = string.split(' ').join('')

  for (var i = 0; i < noSpace.length; i++) {
    if (countObj[noSpace[i]]) {
      countObj[noSpace[i]] += 1;
    } else {
      countObj[noSpace[i]] = 1;
    }

  }

  return countObj;
}

console.log(countLetters('Lighthouse Labs is cool'));