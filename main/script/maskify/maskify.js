function maskify(string) {
  let newString = "";
  for (let i = 0; i < string.length - 4; i++) {
    newString += "#";
  }
  return newString + string.slice(-4);
}

console.log(maskify("1"));