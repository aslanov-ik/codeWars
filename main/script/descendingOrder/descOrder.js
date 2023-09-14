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