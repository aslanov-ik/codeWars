﻿/*
Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для массива, 
состоящего минимум из 4 положительных целых чисел. 
Никакие числа с плавающей запятой или неположительные целые числа передаваться не будут.
*/

//Сортировка массива, сложение первых 2 элементов
function sumTwoSmallestNumbers(numbers) {
  return (
    numbers.sort((a, b) => {
      return a - b;
    })[0] + numbers[1]
  );
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));