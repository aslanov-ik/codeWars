/*
Напишите функцию, которая принимает строковый параметр, меняет местами каждое слово и буквы в строке.
Все пробелы в строке должны быть сохранены.
*/

function reverseWords(str) {
  let splitString = str.split(" ");
  let result = [];
  splitString.forEach((item) => {
    result.push(item.split("").reverse().join(""));
  });
  return result.join(" ");
}

console.log(reverseWords("This is an example!"));