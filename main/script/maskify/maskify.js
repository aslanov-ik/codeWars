// Замаскировать все символы в строке, кроме последних 4.

function maskify(string) {
  //Разделяем строку, маскируем одну часть, объединяем в одну
  let newString = "";
  for (let i = 0; i < string.length - 4; i++) {
    newString += "#";
  }
  return newString + string.slice(-4);
}

console.log(maskify("4556364607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));