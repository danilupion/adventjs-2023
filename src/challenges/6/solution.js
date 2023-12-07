function maxDistance(movements) {
  const left = movements.split("<").length - 1;
  const right = movements.split(">").length - 1;
  const either = movements.split("*").length - 1;

  return Math.abs(left - right) + either;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***<<";
const result3 = maxDistance(movements3);
console.log(result3, 4); // -> 5
