countLetters = (string) => {
  let countObj = {};
  let noSpace = string.split(' ').join('');

  for (let i = 0; i < noSpace.length; i++) {
    if (countObj[noSpace[i]]) {
      countObj[noSpace[i]] += 1;
    } else {
      countObj[noSpace[i]] = 1;
    }

  }

  return countObj;
}

console.log(countLetters('Lighthouse Labs is cool'));