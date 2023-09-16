/*
Как уже видно из названия, он работает в основном как Фибоначчи, 
но суммируя последние 3 (вместо 2) чисел последовательности для генерации следующего.*/

//Создал новый массив, запушил в него значения из массива-аргумента. Циклом сложил 3 последних числа в массиве,
//в конце вернул массив, обрезав его через слайс до нужных размеров.
function tribonacci(signature, n) {
  let newArr = [];
  signature.forEach((item) => {
    newArr.push(item);
  });
  for (let i = 0; i < n; i++) {
    newArr.push(
      newArr[newArr.length - 1] +
        newArr[newArr.length - 2] +
        newArr[newArr.length - 3],
    );
  }
  return newArr.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));