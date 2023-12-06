function maxDistance(movements) {
  const scores = {
    ">": 1,
    "<": -1,
    "*": 0,
  };

  return Math.max(
    ...Array.from(movements.matchAll(/(>+|<+|\*+)/g))
      .reduce(
        (acc, [block]) => {
          const score = scores[block[0]];
          return score
            ? acc.map((distance) => distance + block.length * score)
            : [
                ...acc.map((distance) => distance + block.length),
                ...acc.map((distance) => distance - block.length),
              ];
        },
        [0],
      )
      .map(Math.abs),
  );
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
