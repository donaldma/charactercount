countLetters = (string) => {
  let countObj = {};

  for (let i = 0; i < string.length; i++) {
    if (countObj[string[i]] === undefined) {
      countObj[string[i]] = [i];
    } else {
      countObj[string[i]].push(i);
    }

  }

  return countObj;
}

console.log(countLetters('Lighthouse Labs is cool'));