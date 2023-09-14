/* Ваша задача — создать функцию, которая может принимать в качестве аргумента 
 любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. 
 По сути, переставьте цифры, чтобы получить максимально возможное число.*/

/*Преобразовал в строку. Пробежался циклом по чарам и запушил их в массив. 
Далее отсортировал по убыванию и вернул, преобразовав обратно в число.*/

function descendingOrder(n) {
  let temp = n.toString(),
    arr = [],
    result;
  for (let i = 0; i < temp.length; i++) {
    arr.push(+temp.charAt(i));
  }
  result = arr
    .sort((a, b) => {
      return b - a;
    })
    .join("");
  return Number(result);
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));